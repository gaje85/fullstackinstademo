const stories = [
  {
    name: "Bret",
    profileImage: "https://i.pravatar.cc/150?img=46"
  },
  {
    name: "Delphine",
    profileImage: "https://i.pravatar.cc/150?img=69"
  },
  {
    name: "Indy",
    profileImage: "https://i.pravatar.cc/150?img=17"
  },
  {
    name: "Karianne",
    profileImage: "https://i.pravatar.cc/150?img=48"
  },
  {
    name: "Kamren",
    profileImage: "https://i.pravatar.cc/150?img=9"
  }
];

const posts = [
  {
    poster: {
      username: "harry.trotter",
      profileImage: "https://i.pravatar.cc/150?img=60"
    },
    likesCount: 90,
    recentLikeBy: "dadatalak",
    postImage: "https://picsum.photos/id/10/800/800",
    timestamp: "2 hours ago",
    hasStory: true,
    comments: [
      {
        username: "somedude",
        comment: "Awesome pic!"
      },
      {
        username: "timepass",
        comment: "This looks great!"
      }
    ]
  },
  {
    poster: {
      username: "Karianne",
      profileImage: "https://i.pravatar.cc/150?img=70"
    },
    likesCount: 47,
    recentLikeBy: "therealguy",
    postImage: "https://picsum.photos/id/20/800/800",
    timestamp: "4 hours ago",
    hasStory: false,
    comments: []

  },
  {
    poster: {
      username: "Delphine",
      profileImage: "https://i.pravatar.cc/150?img=47"
    },
    likesCount: 56,
    recentLikeBy: "unrealpics",
    postImage: "https://picsum.photos/id/40/800/800",
    timestamp: "6 hours ago",
    hasStory: false,
    comments: [
      {
        username: "dadess",
        comment: "Love it!"
      }
    ]

  }
];

function getStories(req, res) {
  return res.status(200).json(stories);
}

function getPosts(req, res) {
  return res.status(200).json(posts);
}

module.exports = {
  getStories,
  getPosts
}
