myApp.controller('BassBoard', ['$scope', '$filter', function($scope, $filter){

//set timeElapsed initial to 0 for directive
  $scope.timeElapsed = 0;

//set up comment object
  $scope.comment = {
    posts: [{
      time: 'Time',
      note: 'Comment'
    }]
  };


  $scope.postComment = function() {
    $scope.comment.posts.push({
      time: $scope.time,
      note: $scope.note
    });
  };

  $scope.getTime = function(time){
    prompt(time + 'hey');  //prints time = getTime(HTML)
  };
}]);
