(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;
        
        vm.caption = "Caption in MainController";
        
    }

})();