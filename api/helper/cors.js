const cors = require("cors");
var whitelist = ['*', 'http://shinosuke.cf', 'http://localhost:3001', 'http://127.0.0.1']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions = { origin: true };
    // if (whitelist.indexOf(req.header('Origin')) !== -1) {
    //   corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    // } else {
    //   corsOptions = { origin: false } // disable CORS for this request
    // }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }

module.exports = cors(corsOptionsDelegate);
