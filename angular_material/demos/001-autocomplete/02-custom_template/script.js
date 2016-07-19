(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial']);

    angular.module('myApp')
        .controller('ReposController', ['ReposFactory', ReposController]);

    function ReposController(ReposFactory) {

        var vm = this;
        vm.repos = [];
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;
        vm.querySearch = querySearch;

        loadRepos();

        function loadRepos() {
            ReposFactory.list()
                .then(function (response) {
                    vm.repos = response.data;
                    vm.repos.map(function (item) {
                        item.value = item.name.toLowerCase();
                    });
                });
        }


        function selectedItemChange(item) {
            console.log('Item changed to:', item);
        }

        function searchTextChange(text) {
            console.log('Text changed to:', text);
        }

        function querySearch(query) {
            return query ? vm.repos.filter(function (item) {
                return (item.value.indexOf(angular.lowercase(query)) > -1);
            }) : vm.repos;
        }
        
    }

})();