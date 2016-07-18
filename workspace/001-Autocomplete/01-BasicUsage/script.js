(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial'])
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.users = [];
        
        vm.dataFlag = {
            id: true,
            name: true,
            email: true,
            address: true,
            street: true,
            city: true,
            state: true,
            country: true,
            zipCode: false
        };

        var addressFields = ['street','city','state','country', 'zipCode'];
        var addressColumnsToDisplay = [];
        var userFields = ['id', 'name', 'email', 'address'];
        var userColumnsToDisplay = [];
        
        for (var x = 0; x < addressFields.length; x++) {
            if(vm.dataFlag[addressFields[x]])
                addressColumnsToDisplay.push(addressFields[x]);
        }

        for (var x = 0; x < userFields.length; x++) {
            if(vm.dataFlag[userFields[x]])
                userColumnsToDisplay.push(userFields[x]);
        }
        
        var userSchema = {
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt'
                },
                name: {
                    type: 'string',
                    faker: 'name.findName'
                },
                email: {
                    type: 'string',
                    format: 'email',
                    faker: 'internet.email'
                },
                address: {
                    type: 'object',
                    properties: {
                        street: {
                            type: 'string',
                            faker: 'address.streetName'
                        },
                        city: {
                            type: 'string',
                            faker: 'address.city'
                        },
                        state: {
                            type: 'string',
                            faker: 'address.state'
                        },
                        country: {
                            type: 'string',
                            faker: 'address.country'
                        },
                        zipCode: {
                            type: 'string',
                            faker: 'address.zipCode'
                        }
                    },
                    required: addressColumnsToDisplay
                }
            },
            required: userColumnsToDisplay,
            definitions: {
                positiveInt: {
                    type: 'integer',
                    minimum: 0,
                    exclusiveMinimum: true
                }
            }
        };

        for (var x = 0; x < 1000; x++) {
            var userData = jsf(userSchema);
            vm.users.push(userData);
        }

    }

})();