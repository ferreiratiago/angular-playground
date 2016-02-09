describe('AngularTraining App', function() {

    describe('Git repos list view', function() {

        beforeEach(function() {
          browser.get('app/index.html');
        });

        it('should filter the list as the user types into the search box', function() {
            var repos = element.all(by.repeater('repo in gitRepos'));
            var query = element(by.model('query'));

            expect(repos.count()).toBeGreaterThan(10);

            query.sendKeys('dart');
            expect(repos.count()).toBeGreaterThan(2);

            query.clear();
            query.sendKeys('phonecat');
            expect(repos.count()).toBe(1);
        });
    });
});
