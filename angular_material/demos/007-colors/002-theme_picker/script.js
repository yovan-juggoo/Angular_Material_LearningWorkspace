(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', ['$mdColorPalette', MainController]);

    angular.module('myApp')
        .directive('chbThemePreview', [chbThemePreview]);
    
    angular.module('myApp')
        .directive('chbMdJustified', [chbMdJustified]);

    function MainController($mdColorPalette) {
        var vm = this;

        this.colors = Object.keys($mdColorPalette);
        vm.mdURL = 'https://www.google.com/design/spec/style/color.html#color-color-palette';
        vm.primary = 'purple';
        vm.accent = 'green';
        vm.isPrimary = true;

        vm.selectTheme = selectTheme;

        function selectTheme(color) {
            if (vm.isPrimary) {
                vm.primary = color;
                vm.isPrimary = false;
            } else {
                vm.accent = color;
                vm.isPrimary = true;
            }
        }
    }
    
    function chbThemePreview() {
        return {
            restrict: 'E',
            templateUrl: 'templates/themePreview.tmpl.html',
            scope: {
                primary: '=',
                accent: '='
            },
            controller: function ($scope, $mdColors, $mdColorUtil) {
                $scope.getColor = function (color) {
                    return $mdColorUtil.rgbaToHex($mdColors.getThemeColor(color))
                };
            }
        }
    }
    
    function chbMdJustified() {
        return {
            restrict: 'A',
            compile: function (element, attrs) {
                var layoutDirection = 'layout-' + (attrs.chbMdJustified || "row");
                element.removeAttr('md-justified');
                element.addClass(layoutDirection);
                element.addClass("layout-align-space-between-stretch");
                return angular.noop;
            }
        };
    }
    
})();