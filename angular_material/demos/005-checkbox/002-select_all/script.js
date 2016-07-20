(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;

        vm.items = [1, 2, 3, 4, 5];
        vm.selected = [1];

        vm.toggle = toggle;
        vm.exists = exists;
        vm.isIndeterminate = isIndeterminate;
        vm.isChecked = isChecked;
        vm.toggleAll = toggleAll;

        function toggle(item, list) {
            var idx = list.indexOf(item);
            if (idx > -1)
                list.splice(idx, 1);
            else
                list.push(item);
        };

        function exists(item, list) {
            return list.indexOf(item) > -1;
        };

        function isIndeterminate() {
            return (vm.selected.length !== 0 &&
                vm.selected.length !== vm.items.length);
        };

        function isChecked() {
            return vm.selected.length === vm.items.length;
        };

        function toggleAll() {
            if (vm.selected.length === vm.items.length)
                vm.selected = [];
            else if (vm.selected.length === 0 || vm.selected.length > 0)
                vm.selected = vm.items.slice(0);
            console.log('vm.selected:', vm.selected);
        };
    }

})();