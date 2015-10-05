# mini-compress
mini-route file compression handler.

Example:
```javascript
var http = require('http');
var MiniRoute = require('mini-route');
var miniCompress = require('mini-compress');

var server = http.createServer();
var router = new MiniRoute(server);

router.get('/', function(req, res) {
  miniCompress(req, 'some data to compress', function(compressed) {
    res.end(comrpessed);
  });
});

server.listen(8080);
```
