describe('AngularTraining App', function() {

    // test suite
    describe('Football players list view', function() {

        // foreach each test case get the url 'app/index.html'
        beforeEach(function() {
          browser.get('app/index.html');
        });

        // test case
        it('should filter the list as the user types into the search box', function() {

            // get all html elements build by the repeater
            var playersList = element.all(by.repeater('player in footballPlayers'));
            // get the query box
            var query = element(by.model('query'));

            // check if the initial page state is as expected
            expect(playersList.count()).toBe(24);
            // browser.pause(5001);

            // simulates user typing
            query.sendKeys('silva');
            // check if the filter worker properly
            expect(playersList.count()).toBe(2);
            // browser.pause(5002);

            // clear the query box
            query.clear();
            query.sendKeys('ronaldo');
            // only 1 Ronaldo! SIIIIIIIIIIIMM!
            expect(playersList.count()).toBe(1);
            // browser.pause(5003);
        });
    });
});
