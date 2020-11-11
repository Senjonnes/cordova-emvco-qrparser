var exec = require('cordova/exec');

var EMVCoQRParser = {
  parseQrData: function (qrDataString,onSuccess,onFailure){
    if (typeof qrDataString === "undefined" || qrDataString === null) qrDataString = "";
    exec(onSuccess, onFailure, "MVisaQRParserPlugin", "parseQrData", [qrDataString]);
  }
}
module.exports = EMVCoQRParser;
