'use strict';

var zlib = require('zlib');

module.exports = function(req, data, cb) {
  var encoding = req.headers['accept-encoding'];
  if (!encoding) encoding = '';

  if (encoding.match(/\bgzip\b/)) {
    zlib.gzip(data, cb);
  } else if (encoding.match(/\bdeflate\b/)) {
    zlib.deflate(data, cb);
  } else {
    cb(null, data);
  }
}
