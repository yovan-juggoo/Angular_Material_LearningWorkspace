(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', ['$mdDialog', '$mdMedia', '$scope', MainController]);

    angular.module('myApp')
        .controller('DialogController', ['$mdDialog', DialogController]);

    function DialogController($mdDialog) {
        var vm = this;

        vm.hide = function () {
            $mdDialog.hide();
        };

        vm.cancel = function () {
            $mdDialog.cancel();
        };

        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    function MainController($mdDialog, $mdMedia, $scope) {
        var vm = this;
        vm.status = ' ';
        vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        vm.showAlert = showAlert;
        vm.showConfirm = showConfirm;
        vm.showPrompt = showPrompt;
        vm.showAdvanced = showAdvanced;
        vm.showTabDialog = showTabDialog;
        vm.showPrerenderedDialog = showPrerenderedDialog;

        function showAlert(event) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert dialog demo')
                .ok('Got it')
                .targetEvent(event)
            )
        }

        function showConfirm(event) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete yout dept?')
                .textContent('All the banks that agreed to clear your depts.')
                .ariaLabel('Lucky day')
                .ok('Please do it!')
                .cancel('Sounds like a scam')
                .targetEvent(event);

            $mdDialog.show(confirm)
                .then(function () {
                    vm.status = 'You decided to get rid of your debt.';
                }, function () {
                    vm.status = 'You decided to keep your debt.';
                });

        }

        function showPrompt(event) {
            var confirm = $mdDialog.prompt()
                .title('What would you name your dog?')
                .textContent('Bowser is a common name.')
                .placeholder('Dog name')
                .ariaLabel('Dog name')
                .initialValue('Buddy')
                .targetEvent(event)
                .ok('Okay!')
                .cancel('I\'m a cat person');

            $mdDialog.show(confirm).then(function (result) {
                vm.status = 'You decided to name your dog ' + result + '.';
            }, function () {
                vm.status = 'You didn\'t name your dog.';
            });
        }

        function showAdvanced(event) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
            $mdDialog.show({
                    controller: 'DialogController as vm',
                    templateUrl: 'templates/dialog1.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose: true,
                    fullscreen: useFullScreen
                })
                .then(function (answer) {
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function () {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function (wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });
        }

        function showTabDialog(event) {
            $mdDialog.show({
                controller: 'DialogController as vm',
                    templateUrl: 'templates/tabDialog.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose: true
                })
                .then(function (answer) {
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        }

        function showPrerenderedDialog(event) {
            $mdDialog.show({
                controller: 'DialogController as vm',
                contentElement: '#myDialog',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true
            });
        }

    }

})();