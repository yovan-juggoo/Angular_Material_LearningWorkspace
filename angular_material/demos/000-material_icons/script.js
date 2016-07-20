(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial'])
    angular.module('myApp')
        .controller('MainController', ['Iconsfatory', MainController]);

    function MainController(Iconsfatory) {
        var vm = this;
        vm.icons = [];

        getIcons();

        function getIcons() {
            Iconsfatory.list()
                .then(function (response) {
                    var icons = response.data || [];
                    icons = icons.filter(createFilter);
                    icons.map(function (item) {
                        vm.icons.push(setIconName(item));
                    });
                });
        }

        function createFilter(data) {
            return data.lastIndexOf('.svg') > -1;
        }

        function setIconName(name) {
            var tempName = name;
            if (name.indexOf('ic_') > -1)
                tempName = name.substring(name.indexOf('ic_') + 3, name.length);
            tempName = tempName.substring(0, tempName.lastIndexOf('.svg'));
            var test =  {
                name: tempName,
                location: '../../../../material_icons/' + name
            };
            return test;
        }
    }

})();