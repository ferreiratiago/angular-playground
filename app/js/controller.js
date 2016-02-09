app.controller('ReposListCtrl', function ($scope, $http) {
    $http.get('https://api.github.com/users/angular/repos').success(function(data) {
        $scope.gitRepos = data;
    });
});
