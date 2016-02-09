var app = angular.module('angularTraining', []);

app.controller('AngularTrainingController', function ($scope, $http) {
    $http.get('https://api.github.com/users/angular/repos').success(function(data) {
      $scope.gitRepos = data;
    });
});
