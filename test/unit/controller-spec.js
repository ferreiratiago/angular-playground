describe('AngularTrainingController', function(){
    var ctrl;
    var http;
    var scope;

    beforeEach(module('angularTraining'));

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
        http = $httpBackend;
        http.expectGET('https://api.github.com/users/angular/repos')
            .respond([{
                name: 'angular',
                html_url: 'www.angular.io'
            }]);

        scope = $rootScope.$new();
        ctrl = $controller('AngularTrainingController', {$scope: scope});
    }));

    it('should load the git repos from angular', function () {
        expect(scope.gitRepos).toBeUndefined();
        http.flush();

        expect(scope.gitRepos).toEqual([{
            name: 'angular',
            html_url: 'www.angular.io'
        }]);
    });
});
