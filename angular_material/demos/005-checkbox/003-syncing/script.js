(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;

        vm.items = [1, 2, 3, 4, 5];
        vm.selected = [];
        vm.toggle = toggle;
        vm.exists = exists;

        function toggle(item, list) {
            var idx = list.indexOf(item);
            if (idx > -1)
                list.splice(idx, 1);
            else
                list.push(item);
        }

        function exists(item, list) {
            return list.indexOf(item) > -1;
        }
    }

})();