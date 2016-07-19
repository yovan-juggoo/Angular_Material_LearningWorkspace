(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial'])
        .config(function ($mdIconProvider) {
            $mdIconProvider
                .icon('share-arrow', '../../../material_icons/share-arrow.svg', 24)
                .icon('upload', '../../../material_icons/upload.svg', 24)
                .icon('copy', '../../../material_icons/copy.svg', 24)
                .icon('print', '../../../material_icons/print.svg', 24)
                .icon('hangout', '../../../material_icons/hangout.svg', 24)
                .icon('mail', '../../../material_icons/mail.svg', 24)
                .icon('message', '../../../material_icons/message.svg', 24)
                .icon('copy2', '../../../material_icons/copy2.svg', 24)
                .icon('facebook', '../../../material_icons/facebook.svg', 24)
                .icon('twitter', '../../../material_icons/twitter.svg', 24);
        })
        .run(function ($templateRequest) {
            var urls = [
                '../../../material_icons/share-arrow.svg',
                '../../../material_icons/upload.svg',
                '../../../material_icons/copy.svg',
                '../../../material_icons/print.svg',
                '../../../material_icons/hangout.svg',
                '../../../material_icons/mail.svg',
                '../../../material_icons/message.svg',
                '../../../material_icons/copy2.svg',
                '../../../material_icons/facebook.svg',
                '../../../material_icons/twitter.svg'
        ];
            angular.forEach(urls, function (url) {
                $templateRequest(url);
            });
        });


    angular.module('myApp')
        .controller('MainController', ['$timeout', '$mdBottomSheet', '$mdToast', MainController]);

    angular.module('myApp')
        .controller('ListBottomSheetController', ['$mdBottomSheet', ListBottomSheetController]);

    angular.module('myApp')
        .controller('GridBottomSheetController', ['$mdBottomSheet', GridBottomSheetController]);

    function MainController($timeout, $mdBottomSheet, $mdToast) {
        var vm = this;

        vm.showListBottomSheet = showListBottomSheet;
        vm.showGridBottomSheet = showGridBottomSheet;

        vm.alert = '';

        function showListBottomSheet() {
            vm.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'templates/list.tpl.html',
                controller: 'ListBottomSheetController as vm'
            }).then(function (clickedItem) {
                vm.alert = clickedItem.name + ' clicked!';
            });
        }

        function showGridBottomSheet() {
            vm.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'templates/grid.tpl.html',
                controller: 'GridBottomSheetController as vm',
                clickOutsideToClose: false
            }).then(function (clickedItem) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
                );
            });
        }
    }

    function ListBottomSheetController($mdBottomSheet) {
        var vm = this;

        vm.items = [
            {
                name: 'Share',
                icon: 'share-arrow'
            },
            {
                name: 'Upload',
                icon: 'upload'
            },
            {
                name: 'Copy',
                icon: 'copy'
            },
            {
                name: 'Print this page',
                icon: 'print'
            },
        ];

        vm.listItemClick = function ($index) {
            var clickedItem = vm.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };

    }

    function GridBottomSheetController($mdBottomSheet) {
        var vm = this;

        vm.items = [
            {
                name: 'Hangout',
                icon: 'hangout'
            },
            {
                name: 'Mail',
                icon: 'mail'
            },
            {
                name: 'Message',
                icon: 'message'
            },
            {
                name: 'Copy',
                icon: 'copy2'
            },
            {
                name: 'Facebook',
                icon: 'facebook'
            },
            {
                name: 'Twitter',
                icon: 'twitter'
            },
        ];

        vm.listItemClick = function ($index) {
            var clickedItem = vm.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    }

})();