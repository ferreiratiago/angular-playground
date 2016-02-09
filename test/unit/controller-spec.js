// test suite
describe('AngularTrainingController', function(){

    // before each test load the angularTraining module.
    beforeEach(module('angularTraining'));

    // test case
    it('should create "footballPlayers" model with 24 players',
        // inject the $controller service into our test function
        inject(function($controller) {
            // mock scope
            var scope = {};
            // use $controller to create an instance of the AngularTrainingController
            var ctrl = $controller('AngularTrainingController', {$scope:scope});

            // verify that the footballPlayers array property on the scope contains 24 records.
            expect(scope.footballPlayers.length).toBe(24);
    }));
});
