describe('AngularTraining App', function() {

    describe('Repos List', function() {

        it('should redirect index.html to index.html#/repos', function () {
            browser.get('app/index.html');
            browser.getLocationAbsUrl().then(function(url) {
                expect(url).toEqual('/repos');
              });
        });

        it('should filter the list as the user types into the search box', function() {
            // ...
        });
    })

    describe('Repo Details', function () {

        beforeEach(function () {
            browser.get('app/#/repo/angular');
        });

        it('should list the repo branches', function() {

            var branches = element.all(by.repeater('branch in branches'));
            expect(branches.count()).toBeGreaterThan(10);

        });
    });
});
