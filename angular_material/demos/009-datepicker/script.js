(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;
        vm.myDate = new Date();
        vm.onlyWeekendsPredicate = onlyWeekendsPredicate;

        vm.minDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() - 2,
            vm.myDate.getDate());

        vm.maxDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() + 2,
            vm.myDate.getDate());

        function onlyWeekendsPredicate(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }
    }

})();