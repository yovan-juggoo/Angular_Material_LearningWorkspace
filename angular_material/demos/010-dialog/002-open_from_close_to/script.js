(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', [$mdDialog, $mdMedia, MainController]);
    
    angular.module.('myApp')
        .controller(DialogController, ['$mdDialog', DialogController]);
    
    function DialogController($mdDialog) {
        var vm = this;
        vm.hide = function() {
            $mdDialog.hide();
        };

        vm.cancel = function() {
            $mdDialog.cancel();
        };

        vm.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    function MainController($mdDialog, $mdMedia) {
        var vm = this;

        vm.status = '  ';
        vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

        vm.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            );
        };

        vm.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
            .title('Would you like to delete your debt?')
            .textContent('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Please do it!')
            .cancel('Sounds like a scam');

            $mdDialog.show(confirm).then(function() {
                vm.status = 'You decided to get rid of your debt.';
            }, function() {
                vm.status = 'You decided to keep your debt.';
            });
        };

        vm.showPrompt = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.prompt()
            .title('What would you name your dog?')
            .textContent('Bowser is a common name.')
            .placeholder('Dog name')
            .ariaLabel('Dog name')
            .initialValue('Buddy')
            .targetEvent(ev)
            .ok('Okay!')
            .cancel('I\'m a cat person');

            $mdDialog.show(confirm).then(function(result) {
                vm.status = 'You decided to name your dog ' + result + '.';
            }, function() {
                vm.status = 'You didn\'t name your dog.';
            });
        };

        vm.showAdvanced = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && vm.customFullscreen;

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: useFullScreen
            })
                .then(function(answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function() {
                vm.status = 'You cancelled the dialog.';
            });

            vm.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });

        };

        vm.showTabDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tabDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
                .then(function(answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function() {
                vm.status = 'You cancelled the dialog.';
            });
        };

        vm.showPrerenderedDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                contentElement: '#myDialog',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
    }
    
})();