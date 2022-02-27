const {getHelloWorld} = require('../controllers/SampleController');
const {getUserProfile, getUserSuggestions} = require('../controllers/ProfileController');
const {getStories, getPosts} = require('../controllers/TimelineController');

function init(server) {

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  server.use("*", function (req, res, next) {
    console.log(`Request received from ${req.originalUrl}`);
    next();
  });


  setupRoutes(server);
}

function setupRoutes(server) {
  server.get('/', getHelloWorld);
  server.get('/api/user', getUserProfile);
  server.get('/api/suggestions', getUserSuggestions);
  server.get('/api/stories', getStories);
  server.get('/api/posts', getPosts);
}

module.exports = {
  initialize: init
}
