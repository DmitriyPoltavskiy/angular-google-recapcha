angular.module('app', ['vcRecaptcha'])
	.controller('formCtrl', [
		'$scope',
		'vcRecaptchaService',
		function($scope, vcRecaptchaService) {

			$scope.title = 'Login';
            $scope.strength = '';

            $scope.checkPassword = function() {
                if ($scope.password.length > 12) {
                    $scope.strength = 'strong';
                }
                else if ($scope.password.length > 8) {
                    $scope.strength = 'medium';
                }
                else {
                    $scope.strength = 'weak';
                }
            };

            $scope.submit = function () {
                vcRecaptchaService.reload($scope.widgetId);
                $scope.email = '';
                $scope.password = '';
                $scope.strength = '';
            };

            $scope.response = null;
            $scope.model = {
                key: '6LdikBYUAAAAAMkll9SMLme9bgm4awaGN4D78fD_'
            };
            $scope.setResponse = function (response) {
                console.info('Response available');
                $scope.response = response;
            };
            // $scope.widgetId = null;
            // $scope.setWidgetId = function (widgetId) {
            //     console.info('Created widget ID: %s', widgetId);
            //     $scope.widgetId = widgetId;
            // };
            // $scope.cbExpiration = function() {
            //     console.info('Captcha expired. Resetting response object');
            //     vcRecaptchaService.reload($scope.widgetId);
            //     $scope.response = null;
            //  };
		}
	]);
