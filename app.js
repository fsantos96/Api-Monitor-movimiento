var express  = require("express"),
    router      = express(),
    http     = require("http"),
    server   = http.createServer(router);

router.configure(function () {
  router.use(express.bodyParser());
  router.use(express.methodOverride());
  router.use(router.router);
});

router.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/tvshows')(router);

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});