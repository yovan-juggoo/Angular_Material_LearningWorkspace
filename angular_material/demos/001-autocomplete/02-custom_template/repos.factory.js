(function () {
    'use strict';
    
    angular.module('myApp')
        .factory('ReposFactory', ['$http', ReposFactory]);
    
    function ReposFactory($http) {
        
        return {
            list: list
        };
        
        function list() {
            return $http.get('repos.json');
        }
    }
})();