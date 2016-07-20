(function () {
    'use strict';
    
    angular.module('myApp')
        .factory('Iconsfatory', ['$http', Iconsfatory]);
    
    function Iconsfatory ($http) {
        return {
            list: list
        }
        
        function list () {
            return $http.get('../../../../material_icons');
        }
    }
    
})();