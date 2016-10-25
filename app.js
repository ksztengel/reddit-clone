var app = angular.module('redditApp',[])

app.controller('mainController', ['$scope', function($scope){
  $scope.postArray =
  [{
    title: 'The History of Polo',
    image: 'http://images.china.cn/attachement/jpg/site1004/20080824/00080286e07a0a1b099541.jpg',
    author: "Anonymous",
    description: "Mounted nomads in Central Asia played a version of polo that was part sport and part training for war, with as many as 100 men on a side. The game followed the nomads’ migration to Persia (modern Iran) some time between 600 B.C. and 100 AD. In Persia, polo became a national sport, played by the nobility and military men. The game was formalized and spread west to Constantinople, east to Tibet, China and Japan, and south to India.",
    date: new Date,
    numberOfComments: 0,
    comments:"",
    votes: 0

  },
  {
    title: 'High Goal Polo',
    image: 'http://ryanpemblepolo.com/wp-content/uploads/2016/01/2015FinalHurlingham.jpg',
    author: "",
    description: "",
    date: new Date,
    numberOfComments: 0,
    comments: "",
    votes: 0
  },
  {
    title: 'Family Time',
    image:'https://pbs.twimg.com/profile_images/1563380209/image_400x400.jpg',
    author: "",
    description: "",
    date: new Date,
    numberOfComments: 0,
    comments:"",
    votes: 0
  }]


  $scope.submitNewPost = function(post){
    $scope.postArray.push($scope.post)
    console.log(post);

  }



}])
