"use strict";
const Homey = require("homey");
const ManagerLedring = Homey.ManagerLedring;
const generators = require('./lib/generators');

class App extends Homey.App {
  async onInit() {
    this.log(`${Homey.manifest.id} - ${Homey.manifest.version} started...`);

    generators.forEach((screensaver) => {
        // create animation with screensaver.options and generator(colors) function
        var animation = new Homey.LedringAnimation({
          options: screensaver.options,
          frames: screensaver.generator.apply(null, screensaver.colors),
        });

        // register animation
        animation.register(function (err, result) {
          ManagerLedring.registerScreensaver(screensaver.id, animation);
          if (err) return Homey.error(err);
        });
      });
  }
}

module.exports = App;
