"use strict";
const Homey = require("homey");
const generatedScreensavers = require("./assets/json/generated-screensavers.json");

const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);

const ManagerSettings = Homey.ManagerSettings;
const _settingsKey = `${Homey.manifest.id}.settings`;
const getLanguage = Homey.ManagerI18n.getLanguage();
const currentLang = getLanguage === 'nl' ? 'nl' : 'en';

class App extends Homey.App {
  async onInit() {
    this.log(`${Homey.manifest.id} - ${Homey.manifest.version} started...`);
    await this.initSettings();
    this.initScreenSavers();
  }

  async initSettings() {
    try {
      let settingsInitialized = false;
      ManagerSettings.getKeys().forEach((key) => {
        if (key == _settingsKey) {
          settingsInitialized = true;
        }
      });

      if (settingsInitialized) {
        this.log("initSettings - Found settings key", _settingsKey);
        this.appSettings = ManagerSettings.get(_settingsKey);

        if(this.appSettings.SCREENSAVERS.length < Homey.manifest.screensavers.length) {
            this.log(`[InitSettings] - Adding extra screensavers`);
            const difference = Homey.manifest.screensavers.length - this.appSettings.SCREENSAVERS.length;
            const newScreensavers = Homey.manifest.screensavers.slice(-difference);

            this.appSettings.SCREENSAVERS = [...this.appSettings.SCREENSAVERS, ...newScreensavers];
            this.log(`[InitSettings] - Added`, newScreensavers);
        }

        this.appSettings = {...this.appSettings, LANGUAGE: currentLang};
        this.log(`[InitSettings] - Set language to`, currentLang);

        if (this.appSettings) {
          this.saveSettings();
        }

        return;
      }

      this.log(`Initializing ${_settingsKey} with defaults`);
      this.updateSettings({ SCREENSAVERS: Homey.manifest.screensavers, LANGUAGE: currentLang }, false);
    } catch (err) {
      this.error(err);
    }
  }

  updateSettings(settings, restart = true) {
    this.log("updateSettings - New settings:", settings);
    this.appSettings = settings;
    this.saveSettings();

    if (restart) {
      this.log("Restart the app.");
    }
  }

  saveSettings() {
    if (typeof this.appSettings === "undefined") {
      this.log("Not saving settings; settings empty!");
      return;
    }

    this.log("Saved settings.");
    ManagerSettings.set(_settingsKey, this.appSettings);
  }

  initScreenSavers() {
    generatedScreensavers.sort((a, b) => a.title[currentLang].localeCompare(b.title[currentLang])).forEach(async (screensaver) => {
      const matchedScreensaver = this.appSettings.SCREENSAVERS.find(
        (s) => s.name === screensaver.id
      );

      if (matchedScreensaver && matchedScreensaver.enabled) {
        this.log(`Registering: ${screensaver.id}`);

        const animation = new Homey.LedringAnimation(screensaver);

        await animation.register();
        await setTimeoutPromise(1 * 1000, "waiting is done");
        await animation.registerScreensaver(screensaver.id);
      }
    });
  }
}

module.exports = App;
