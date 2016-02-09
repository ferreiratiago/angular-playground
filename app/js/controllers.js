app.controller('ReposListCtrl', function ($scope, $http) {
    $http.get('https://api.github.com/users/angular/repos').success(function(data) {
        $scope.gitRepos = data;
    });
});

app.controller('RepoDetailsCtrl', function ($scope, $routeParams, $http) {
    $http.get('https://api.github.com/repos/angular/'+ $routeParams.repoId +'/branches')
        .success(function(data) {
            $scope.branches = data;
    });
});
