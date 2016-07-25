(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .config(['$mdIconProvider', function ($mdIconProvider) {
            $mdIconProvider.icon('md-close', '../../../../material_icons/ic_close_24px.svg', 24);
        }])
        .controller('MainController', ['$timeout', '$q', MainController]);

    function MainController($timeout, $q) {
        var vm = this;

        vm.readonly = false;

        vm.fruitNames = ['Apple', 'Banana', 'Orange'];
        vm.roFruitNames = angular.copy(vm.fruitNames);
        vm.editableFruitNames = angular.copy(vm.fruitNames);

        vm.tags = [];
        vm.vegObjs = [
            {
                'name': 'Broccoli',
                'type': 'Brassica'
            },
            {
                'name': 'Cabbage',
                'type': 'Brassica'
            },
            {
                'name': 'Carrot',
                'type': 'Umbelliferous'
            }
        ];

        vm.newVeg = function (chip) {
            return {
                name: chip,
                type: 'unknown'
            };
        };
    }
})();