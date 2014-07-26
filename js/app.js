var triviaApp = angular.module('triviaApp', ['firebase']);

triviaApp.controller('QuestionListCtrl', ['$scope', '$firebase', function($scope, $firebase) {
    var firebaseURL = "https://glaring-fire-3841.firebaseio.com/questions";
    $scope.questions = $firebase(new Firebase(firebaseURL));
}]);