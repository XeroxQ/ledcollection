function onHomeyReady(Homey) {
  const _settingsKey = `openmindnl.ledcollection.settings`;

  const initializeSettings = function (err, data) {
    if (err || !data) {
      document.getElementById("error").innerHTML = err;
      return;
    }

    const screensavers = data["SCREENSAVERS"];
    emptyFieldSet();
    Object.keys(screensavers).forEach(function (key, index) {
      const inputWrapper = document.getElementById("SCREENSAVER_SETTINGS");
      let input = document.createElement("div");
      let checked = "";
      if (screensavers[key].enabled) {
        checked = "checked";
      }

      input.id = screensavers[key].name;
      input.classList.add("field");
      input.classList.add("row");
      input.innerHTML =
        '<label for="' +
        screensavers[key].name +
        '">' +
        screensavers[key].title.en +
        '</label><input type="checkbox" name="' +
        screensavers[key].name +
        '" ' +
        checked +
        "/>";

      inputWrapper.appendChild(input);
    });

    initSave(data);
    initSelect();
  };

  // --------------------------------------------------------------

  Homey.get(_settingsKey, initializeSettings);
  Homey.on("settings.set", (key, data) => {
    if (key == _settingsKey) {
      Homey.get(_settingsKey, initializeSettings);
    }
  });

  Homey.ready();
}

function emptyFieldSet() {
  var fieldSetWrapper = document.getElementById("SCREENSAVER_SETTINGS");
  fieldSetWrapper.innerHTML = "";
}

function initSave(_settings) {
  const error = document.getElementById("error");
  const loading = document.getElementById("loading");
  const success = document.getElementById("success");

  document.getElementById("save").addEventListener("click", function (e) {
    let SCREENSAVERS_OBJECT = _settings.SCREENSAVERS;

    const inputs = SCREENSAVER_SETTINGS.getElementsByTagName("input");
    let index = 0;
    for (let input of inputs) {
      SCREENSAVERS_OBJECT[index].enabled = input.checked;
      index++;
    }

    const settings = {
      SCREENSAVERS: SCREENSAVERS_OBJECT,
    };

    // ----------------------------------------------

    loading.innerHTML = '<i class="fa fa-spinner fa-spin fa-fw"></i>Saving';
    error.innerHTML = "";
    success.innerHTML = "";

    Homey.api("PUT", "/settings", settings, function (err, result) {
      if (err) {
        error.innerHTML = err;
        loading.innerHTML = "";
        return Homey.alert(err);
      } else {
        loading.innerHTML = "";
        error.innerHTML = "";
        success.innerHTML = "Saved. Restart the app to flush the screensavers.";
      }
    });
  });
}

function initSelect() {
  document.getElementById("select").addEventListener("click", function (e) {
    selectionToggle(true);
  });

  document.getElementById("deselect").addEventListener("click", function (e) {
    selectionToggle(false);
  });
}

function selectionToggle(toggle) {
  const inputs = SCREENSAVER_SETTINGS.getElementsByTagName("input");
  for (let input of inputs) {
    input.checked = toggle;
  }
}
