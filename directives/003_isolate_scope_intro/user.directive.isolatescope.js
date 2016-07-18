(function () {
    'use strict';
    angular.module('myApp')
        .directive('userIsolateScope', [UserIsolateScopeDirective]);

    function UserIsolateScopeDirective() {
        return {
            restrict: 'EA',
            scope: {
                caption: '@tableTitle' //attr local scope
            },
            templateUrl: 'templates/users.html',
            controller: 'userController as vm',
            link: function (scope, element, attrs) {
                
                scope.vm.title =  scope.vm.title || "From template.";
                
                var style = element[0].style.fontFamily;
                
                element.bind('mouseenter', function () {
                    //element.css('font-family', 'Times');
                });

                element.bind('mouseleave', function () {
                    //element.css('font-family', style);
                });
            
            }
        }
    }

})();