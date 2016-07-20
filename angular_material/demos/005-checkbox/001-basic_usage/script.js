(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;
        vm.data = {};
        vm.data.cb1 = true;
        vm.data.cb2 = false;
        vm.data.cb3 = false;
        vm.data.cb4 = false;
        vm.data.cb5 = false;
    }

})();