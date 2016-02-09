var app = angular.module('angularTraining', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/repos', {
                templateUrl: 'partials/repos-list.html',
                controller: 'ReposListCtrl'
            }).
            when('/repo/:repoId', {
                templateUrl: 'partials/repo-details.html',
                controller: 'RepoDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/repos'
            });
    }]);
