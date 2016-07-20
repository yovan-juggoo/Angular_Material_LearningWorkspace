(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial'])
        .config(['$mdThemingProvider', ThemeConfig]);
    angular.module('myApp')
        .controller('MainController', [MainController]);

    function MainController() {}

    function ThemeConfig($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey')
            .backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange')
            .backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple')
            .backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue')
            .backgroundPalette('blue').dark();
    }

})();