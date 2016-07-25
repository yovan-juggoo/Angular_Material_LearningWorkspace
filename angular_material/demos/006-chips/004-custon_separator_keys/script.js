(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('MainController', ['$mdConstant', MainController]);

    function MainController($mdConstant) {
        this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
        this.tags = [];
        var semicolon = 186;
        var semicolon = 186;
        this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, semicolon];
        this.contacts = ['test@example.com'];
    }
    
})();