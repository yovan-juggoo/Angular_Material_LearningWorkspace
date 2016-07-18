(function () {
    'use strict';

    angular.module('myApp')
        .directive('xmenTile', function () {
            return {
                templateUrl: 'template/x-men-tile.html',
                restrict: 'E',
                scope: {
                    character: '='
                },
                link: function (scope, elem, attrs) {
                    scope.changeName = function () {
                        scope.character.name = 'Changed Name';
                    };
                }
            }
        });
})();