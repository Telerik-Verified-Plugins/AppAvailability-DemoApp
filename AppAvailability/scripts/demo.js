(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        isAvailable: function (app) {
            if (!this.checkSimulator()) {
                appAvailability.check(
                  app,
                  function() { alert(app + " is available") },
                  function() { alert(app + " is NOT available") }
                )
            }
        },
        
        checkTwitter: function () {
          this.isAvailable(this.isIOS() ? "twitter://" : "com.twitter.android");
        },

        checkFacebook: function () {
          this.isAvailable(this.isIOS() ? "fb://" : "com.facebook.katana");
        },

        checkLinkedIN: function () {
          this.isAvailable(this.isIOS() ? "linkedin://" : "com.linkedin.android");
        },

        checkWhatsApp: function () {
          this.isAvailable(this.isIOS() ? "whatsapp://" : "com.whatsapp");
        },

        checkSnapchat: function () {
          this.isAvailable(this.isIOS() ? "snapchat://" : "com.snapchat.android");
        },

        checkSlack: function () {
          this.isAvailable(this.isIOS() ? "slack://" : "com.Slack");
        },

        checkUntappd: function () {
          this.isAvailable(this.isIOS() ? "untappd://" : "com.untappdllc.app");
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.appAvailability === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        },

        isIOS: function() {
          // This demo app expects the org.apache.cordova.device plugin to be installed
          return device.platform === 'iOS';
        },

        // callbacks
        onSuccess: function(msg) {
            console.log('Succes callback: ' + msg);
        },

        onError: function(msg) {
            alert('Error callback: ' + msg);
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);