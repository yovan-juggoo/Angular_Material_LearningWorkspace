(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', ['$timeout', '$q', MainController]);

    function MainController($timeout, $q) {
        this.chipText = 'Football';
    }
    
})();