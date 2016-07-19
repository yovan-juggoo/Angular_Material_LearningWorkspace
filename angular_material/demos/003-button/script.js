(function () {
    'use strict';
    
    angular.module('myApp', ['ngMaterial']);
    
    angular.module('myApp')
    .controller('MainController', MainController);
    
    function MainController() {
        var vm = this;
        
        vm.title1 = 'Button';
        vm.title4 = 'Warn';
        vm.isDisabled = 'true';
        vm.googeUrl = 'http://google.com';
        
    }
})();