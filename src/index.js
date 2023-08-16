const meta = {};

util = {
  setScope: function (scope) {
    meta.scope = scope;
  },
  setTopic: function (topic) {
    meta.topic = topic;
  },
};

init = function (scope, topic, opt) {
  if (opt === undefined) {
    opt = {};
  }

  util.setScope(scope);
  util.setTopic(topic);

  if (opt.verbose === true) {
    console.log(
      `%cSRBJSLogger %cInitialized`,
      "background-color: #273a7c;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #273a7c;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
      "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;border: 1px solid #273a7c; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif"
    );
  }
};

getVersionInfo = function () {
  var packageJson = require("../package.json");
  var version = packageJson.version;

  console.log(
    `%cSRBJSLogger %c` + version,
    "background-color: #273a7c;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #273a7c;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;border: 1px solid #273a7c; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif"
  );
  return version;
};

log = function (title, text, config) {
  if (config === undefined) {
    config = {};
  }

  var scope = config.scope || meta.scope || "?";
  var topic = config.topic || meta.topic || "?";

  console.log(
    "%c" + scope + " %c" + topic + " %c" + title + " %c" + text,
    "background-color: #273a7c;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #273a7c;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;border: 1px solid #273a7c; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;font-family: Roboto,Verdana,Geneva,sans-serif; font-weight: bold",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;font-family: monospace;"
  );
};

error = function (title, text, config) {
  if (config === undefined) {
    config = {};
  }

  var scope = config.scope || meta.scope || "?";
  var topic = config.topic || meta.topic || "?";

  console.error(
    "%c" + scope + "%c" + topic + " %c" + title + " %c" + text,
    "background-color: #ed2213;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #ed2213;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;border: 1px solid #ed2213; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;font-family: Roboto,Verdana,Geneva,sans-serif; font-weight: bold",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;font-family: monospace;"
  );
};

warn = function (title, text, config) {
  if (config === undefined) {
    config = {};
  }

  var scope = config.scope || meta.scope || "?";
  var topic = config.topic || meta.topic || "?";

  console.warn(
    "%c" + scope + "%c" + topic + " %c" + title + " %c" + text,
    "background-color: #ed8013;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #ed8013;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;border: 1px solid #ed8013; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;font-family: Roboto,Verdana,Geneva,sans-serif; font-weight: bold",
    "background-color: transparent;color: #535;padding: 3px 3px 3px 2px;font-family: monospace;"
  );
};

developer = function (showQrCode, addProperties) {
  if (addProperties === undefined) {
    addProperties = {};
  }

  function detectZoom() {
    var ratio = 0,
      screen = window.screen,
      ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    } else if (~ua.indexOf("msie")) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
      }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio) {
      ratio = Math.round(ratio * 100);
    }

    return ratio;
  }

  function detectUi5() {
    if (typeof sap !== "undefined") {
      return sap.ui.getVersionInfo().version;
    } else {
      return "UI5 is not used";
    }
  }

  const navigatorDetails = navigator.appVersion;
  const browserRef = window.location.href;
  const deviceZoom = detectZoom();
  const screenSize = window.screen.availHeight + "x" + window.screen.availWidth;
  const ui5Version = detectUi5();

  var navigatorText = "%cNavigator: " + "%c" + navigatorDetails;
  var locationText = "%cLocation: " + "%c" + browserRef;
  var deviceZoomText = "%cDevice zoom: " + "%c" + deviceZoom + "%";
  var screensizeText = "%cScreensize: " + "%c" + screenSize;
  var ui5VersionText = "%cUI5 Version: " + "%c" + ui5Version;

  console.log(
    navigatorText + "\n" + locationText + "\n" + deviceZoomText + "\n" + screensizeText + "\n" + ui5VersionText,
    "font-family: 'Montserrat',sans-serif; font-weight: bold; border-left: 3px solid #273a7c; padding: 5px;",
    "font-family: 'Montserrat',sans-serif; font-weight: unset;",
    "font-family: 'Montserrat',sans-serif; font-weight: bold; border-left: 3px solid #273a7c; padding: 5px;",
    "font-family: 'Montserrat',sans-serif; font-weight: unset;",
    "font-family: 'Montserrat',sans-serif; font-weight: bold; border-left: 3px solid #273a7c; padding: 5px;",
    "font-family: 'Montserrat',sans-serif; font-weight: unset;",
    "font-family: 'Montserrat',sans-serif; font-weight: bold; border-left: 3px solid #273a7c; padding: 5px;",
    "font-family: 'Montserrat',sans-serif; font-weight: unset;",
    "font-family: 'Montserrat',sans-serif; font-weight: bold; border-left: 3px solid #273a7c; padding: 5px;line-height: 16px;",
    "font-family: 'Montserrat',sans-serif; font-weight: unset; border-bottom: 1px solid #273a7c; line-height: 16px;"
  );

  Object.keys(addProperties).forEach(function (key) {
    var property = addProperties[key];
    console.log(
      "%c" + key + ": " + "%c" + property,
      "font-family: 'Montserrat',sans-serif; font-weight: bold; border-left: 3px solid #f4d210; padding: 5px;",
      "font-family: 'Montserrat',sans-serif; font-weight: unset;"
    );
  });

  if (showQrCode === true) {
    if (typeof QRCodeSVG !== "undefined") {
      var standardData = {
        navigatorText: navigatorDetails,
        locationText: browserRef,
        deviceZoomText: deviceZoom,
        screensizeText: screenSize,
        ui5VersionText: ui5Version,
      };
      var qrData = {
        ...standardData,
        ...addProperties,
      };
      var qrcode = new QRCodeSVG({
        content: JSON.stringify(qrData),
        //container: "svg-viewbox", //Responsive use
        join: true, //Crisp rendering and 4-5x reduced file size
        width: 400,
        height: 400,
        color: "#273a7c",
      });

      var svgDataUrl = `data:image/svg+xml;base64,${btoa(qrcode.svg())}`;

      console.log(
        "%c ",
        `
        background-image: url(${svgDataUrl});
        padding-bottom: 200px;
        padding-left: 200px;
        margin: 20px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      `
      );
    } else {
      var packageJson = require("../package.json");
      var version = packageJson.version;
      SRBJSLogger.warn(
        "SRBJSLogger",
        "Please first include the library for generating the QRCode with: <script src='https://npmcdn.com/srbjslogger@" + version + "/src/qrcode-svg-ts.min.js'></script>"
      );
    }
  }
};

module.exports = {
  log,
  error,
  warn,
  developer,
  getVersionInfo,
  init,
};
