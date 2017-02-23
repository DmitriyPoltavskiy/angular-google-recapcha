describe('reCaptcha:', function() {
	var scope = {};
	var ctrl;

	beforeEach(module('app'));

	beforeEach(inject(function($controller) {
		ctrl = $controller('formCtrl', {$scope: scope});
	}));

	it('should initialize the title in the scope', function() {
		expect(scope.title).toBeDefined();
		expect(scope.title).toBe('Login');
 	});

	it('if password less then, 8 character, sets the $scope.strength to "weak"', function() {
		scope.password = 'pass';

		scope.checkPassword();

		expect(scope.strength).toBeDefined();
		expect(scope.strength).toBe('weak');
 	});

	it('if password more then, 8 character, sets the $scope.strength to "medium"', function() {
		scope.password = 'mediumPass';

		scope.checkPassword();

		expect(scope.strength).toBeDefined();
		expect(scope.strength).toBe('medium');
 	});

	it('if password more then, 12 character, sets the $scope.strength to "strong"', function() {
		scope.password = 'strongPassword';

		scope.checkPassword();

		expect(scope.strength).toBeDefined();
		expect(scope.strength).toBe('strong');
 	});
});