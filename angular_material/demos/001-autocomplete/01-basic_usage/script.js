(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial']);
    
    angular.module('myApp')
    .controller('UserController', ['UserFactory', UserController]);
    
    function UserController (UserFactory) {
        var vm = this;
        
        vm.simulateQuery = false;
        vm.isDisabled = false;
        vm.isRequired = false;
        
        vm.users = UserFactory.list();
        
        
    }
    
})();