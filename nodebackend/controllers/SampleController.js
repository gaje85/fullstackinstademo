
function getHelloWorld(req, res) {
  console.log("Got a request for GET / endpoint");
  return res.json({msg: "Hello World"});
}

module.exports = {
  getHelloWorld
};
