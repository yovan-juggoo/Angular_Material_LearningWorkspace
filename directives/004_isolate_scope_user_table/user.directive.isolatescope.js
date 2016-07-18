(function () {
    'use strict';
    angular.module('myApp')
        .directive('userIsolateScope', [UserIsolateScopeDirective]);

    function UserIsolateScopeDirective() {
        return {
            restrict: 'EA',
            scope: {
                caption: '@tableTitle',
                title: '@',
                users: '=',
                populate: '&',
                addUser: '&',
                addAdmin: '&',
                counter: '@'
            },
            templateUrl: 'templates/users.html',
            link: function (scope, element, attrs, ngController) {
                angular.element(document.getElementById("resetData"))
                    .bind('click', function () {
                        var isLogAllowed = false;
                        if(isLogAllowed) 
                            console.log('Clicked on reset button!');
                    });
            }
        }
    }

})();