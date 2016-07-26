(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .config(['$mdThemingProvider', '$mdIconProvider', appConfig]);

    angular.module('myApp')
        .controller('UserCardController', [UserCardController]);

    angular.module('myApp')
        .directive('regularCard', [regularCard]);

    angular.module('myApp')
        .directive('userCard', [userCard]);

    function appConfig($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('forest')
            .primaryPalette('brown')
            .accentPalette('green');
        $mdIconProvider.defaultIconSet('../../../../material_icons/sets/social-icons.svg', 24);
    }

    function UserCardController() {
        var vm = this;
        vm.theme = vm.theme || 'default';
    }

    function regularCard() {
        return {
            restrict: 'E',
            templateUrl: 'templates/regularCard.tmpl.html',
            scope: {
                name: '@'
            }
        }
    }

    function userCard() {
        return {
            restrict: 'E',
            templateUrl: 'templates/userCard.tmpl.html',
            scope: {
                name: '@',
                theme: '@'
            },
            controller: 'UserCardController as vm',
            link: function (scope, element, attrs) {
                scope.theme = scope.theme || scope.vm.theme;
            },
        }
    }

})();