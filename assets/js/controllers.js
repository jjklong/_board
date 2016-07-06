myApp.controller('BassBoard', ['$scope', '$filter', function($scope, $filter){

//set timeElapsed initial to 0 for directive
  $scope.timeElapsed = 0;

//set up comment object
  $scope.comment = {
    posts: [{
      time: $scope.time,
      note: $scope.note
    }]
  };


  $scope.postComment = function() {
    $scope.comment.posts.push({
      time: $scope.time,
      note: $scope.note
    });
  };

  $scope.deletePost = function(index){
    $scope.comment.posts.splice(index,1);
  };

  $scope.getTime = function(time){
    prompt(time + 'hey');  //prints time = getTime(HTML)
  };
}]);
