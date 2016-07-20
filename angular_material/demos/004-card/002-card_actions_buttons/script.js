(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial']);

    angular.module('myApp').config(['$mdIconProvider', IconProviderConfig]);

    angular.module('myApp')
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;
        vm.isOpen = true;
        vm.toggle = toggle;
        vm.imagePath = '../../../../material_icons/washedout.png';

        function toggle() {
            vm.isOpen = !vm.isOpen;
        }
    }

    function IconProviderConfig($mdIconProvider) {
        $mdIconProvider.icon('md-toggle-arrow', '../../../../material_icons/toggle-arrow.svg', 48);
    }

})();