var app = angular.module('redditApp', ['ngAnimate'])

app.controller('mainController', ['$scope', function($scope) {
    $scope.sort = '-votes'
    $scope.showCommentForm = false
    $scope.view = {}
    $scope.view.postArray = [{
        title: 'The History of Polo',
        image: 'http://images.china.cn/attachement/jpg/site1004/20080824/00080286e07a0a1b099541.jpg',
        author: "Anonymous",
        description: "Mounted nomads in Central Asia played a version of polo that was part sport and part training for war, with as many as 100 men on a side. The game followed the nomads’ migration to Persia (modern Iran) some time between 600 B.C. and 100 AD. In Persia, polo became a national sport, played by the nobility and military men. The game was formalized and spread west to Constantinople, east to Tibet, China and Japan, and south to India.",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible: false,
        comments: [],
        votes: 0,
        id: 0

    }, {
        title: 'High Goal Polo',
        image: 'http://ryanpemblepolo.com/wp-content/uploads/2016/01/2015FinalHurlingham.jpg',
        author: "Guards Polo Staff",
        description: "There are 4 to 6 'chukkas' in a match and each one lasts for 7 minutes of actual play. At present, though due to change, when the ball goes out of play, or the whistle is blown, the clock is stopped and only restarted when the umpire calls 'Play'. At the end of the period a bell goes to signify that the 7 minutes are up, however there is a further 30 seconds of play unless the whistle is blown, the ball hits the boards, or the ball goes out of play. This extra 30 seconds does not apply to the last chukka unless the scores are equal. Should a match be drawn a 'sudden death' (i.e. first to score) chukka maybe played, and if still a draw at the end of that chukka, another one is played with the goalposts widened. There is an interval of 3 minutes between chukkas but 5 minutes at half time when traditionally spectators are invited to tread in the divots.",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible: false,
        comments: [],
        votes: 0,
        id: 1

    }, {
        title: 'The Athletes',
        image: 'http://www.lospingosdeltaita.com/images/padrillos/1425323201_big.jpg',
        author: "Polo Museum Staff",
        description: "Polo mounts are called “ponies,” although the term “pony” is traditional and the mount is actually a full-sized horse. They range from 14.2 to 16 hands (58 to 64 inches) high at the withers, and weigh 900–1,100 pounds. The polo pony is selected for quick bursts of speed, stamina, agility and manoeuvrability. Temperament is critical: The horse must remain responsive under pressure and not become excited or difficult to control. They are trained to be handled with one hand on the reins, and to respond to the rider's leg and weight cues. A well-trained polo pony accounts for a great amount of the player's net worth to his team.",
        date: moment().calendar(),
        numberOfComments: 0,
        commentsVisible: false,
        comments: [{
            comment: "Beautiful horse!",
            author: "me"
        }],
        votes: 3,
        id: 2
    }]



    function createId() {
        let id = $scope.view.postArray.length
        return id

    }

    $scope.newPost = {};
    $scope.submitNewPost = function(newPostForm) {
        event.preventDefault()

        $scope.newPost.id = createId(),
            $scope.newPost.date = moment().calendar(),
            $scope.newPost.votes = 0,
            $scope.newPost.numberOfComments = 0,
            $scope.newPost.comments = [],
            $scope.view.postArray.push($scope.newPost),
            newPostForm.$setPristine(),
            $scope.newPost = {}
        console.log(newPostForm);
    }

    $scope.view.c = {}
    $scope.submitNewComment = function(post) {
        event.preventDefault()

        let id = post.id
        console.log('postid', post.id);
        console.log('comment', $scope.view.c);
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

    $scope.search = ""

}])

$(document).ready(function() {
    $('select').material_select();
});
