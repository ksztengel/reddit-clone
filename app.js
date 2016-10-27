

var app = angular.module('redditApp', [])

app.controller('mainController', ['$scope', function($scope) {

    $scope.showCommentForm=false
    $scope.view={}
    $scope.view.postArray = [{
        title: 'The History of Polo',
        image: 'http://images.china.cn/attachement/jpg/site1004/20080824/00080286e07a0a1b099541.jpg',
        author: "Anonymous",
        description: "Mounted nomads in Central Asia played a version of polo that was part sport and part training for war, with as many as 100 men on a side. The game followed the nomads’ migration to Persia (modern Iran) some time between 600 B.C. and 100 AD. In Persia, polo became a national sport, played by the nobility and military men. The game was formalized and spread west to Constantinople, east to Tibet, China and Japan, and south to India.",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible:false,
        comments: [],
        votes: 0,
        id: 0

    }, {
        title: 'High Goal Polo',
        image: 'http://ryanpemblepolo.com/wp-content/uploads/2016/01/2015FinalHurlingham.jpg',
        author: "",
        description: "",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible:false,
        comments: [],
        votes: 0,
        id: 1

    }, {
        title: 'Family Time',
        image: 'https://pbs.twimg.com/profile_images/1563380209/image_400x400.jpg',
        author: "",
        description: "",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible:false,
        comments: [],
        votes: 0,
        id: 2
    }, {
        title: 'The Athletes',
        image: 'http://www.lospingosdeltaita.com/images/padrillos/1425323201_big.jpg',
        author: "",
        description: "",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible:false,
        comments: [{comment: "Beautiful horse!",
          author: "me"}],
        votes: 3,
        id: 3
    }]



     function createId(){
      let id = $scope.view.postArray.length
      return id

    }

    $scope.newPost={};
    $scope.submitNewPost = function(post) {
        event.preventDefault()

        $scope.newPost.id = createId(),
        $scope.newPost.date = moment().calendar(),
        $scope.newPost.votes = 0,
        $scope.newPost.numberOfComments = 0,
        $scope.newPost.comments = [],
        $scope.view.postArray.push($scope.newPost),
        $scope.newPost.$setPristine(),
        $scope.newPost.post = {}

    }
    $scope.view.c = {}

    $scope.submitNewComment = function(post){
      event.preventDefault()
      let id = post.id

      console.log('postid',post.id);
      console.log('comment',$scope.view.c);
      $scope.view.postArray[id].comments.push($scope.view.c);
      // $scope.newComment.$setPristine()
      $scope.view.c = {}


    }

    $scope.count = function(c) {
        post.numberOfComments += 1

    }

    $scope.upVote = function(post) {
        post.votes += 1

    }

    $scope.downVote = function(post) {
        post.votes -= 1

    }

    $scope.search=""

}])

$(document).ready(function() {
   $('select').material_select();
 });
