app.directive('gitRepo', function () {
    return {
        restrict: 'E',
        scope: {
            repos: '=repos'
        },
        templateUrl: 'partials/repos-list.html'
    };
});
