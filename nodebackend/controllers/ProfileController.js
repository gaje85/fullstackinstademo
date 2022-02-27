const users = [
  {userName: "ramkumar", fullName: "Ram Kumar", profileImage: "https://i.pravatar.cc/150?img=2"},
  {userName: "sureshprabhu", fullName: "Suresh Prabhu", profileImage: "https://i.pravatar.cc/150?img=8"},
  {userName: "samantha", fullName: "Samantha", profileImage: "https://i.pravatar.cc/150?img=5"}
];


const suggestions = [
  {
    username: "donald.duck", followers: ["catapult.crazy", "ad3fed", "jhfgdf44"], profileImage: "https://i.pravatar.cc/150?img=55"
  },
  {
    username: "micky.mouse", followers: ["donald.crazy", "minniemouse", "jhfgdf44"], profileImage: "https://i.pravatar.cc/150?img=65"
  },
  {
    username: "crazy_driver", followers: ["loves_cars", "livetodrive", "ere33"], profileImage: "https://i.pravatar.cc/150?img=70"
  },
  {
    username: "donald.duck", followers: ["catapult.crazy", "ad3fed", "jhfgdf44"], profileImage: "https://i.pravatar.cc/150?img=55"
  },
  {
    username: "micky.mouse", followers: ["donald.crazy", "minniemouse", "jhfgdf44"], profileImage: "https://i.pravatar.cc/150?img=65"
  },
  {
    username: "crazy_driver", followers: ["loves_cars", "livetodrive", "ere33"], profileImage: "https://i.pravatar.cc/150?img=70"
  },
  {
    username: "donald.duck", followers: ["catapult.crazy", "ad3fed", "jhfgdf44"], profileImage: "https://i.pravatar.cc/150?img=55"
  },
  {
    username: "micky.mouse", followers: ["donald.crazy", "minniemouse", "jhfgdf44"], profileImage: "https://i.pravatar.cc/150?img=65"
  },
  {
    username: "crazy_driver", followers: ["loves_cars", "livetodrive", "ere33"], profileImage: "https://i.pravatar.cc/150?img=70"
  }
];

const {getRandomInt} = require('../helpers/DataHelpers');

/*
 * Profile response - userName, fullName, profileImage
 **/
function getUserProfile(req, res) {
  const id = getRandomInt(1, 3);
  console.log("ID is - " + id);
  console.log("Response is " + JSON.stringify(users[id - 1]));
  return res.status(200).send(users[id - 1]);
}


function getUserSuggestions(req, res) {
  return res.status(200).send(suggestions);
}


module.exports = {
  getUserProfile,
  getUserSuggestions
};
