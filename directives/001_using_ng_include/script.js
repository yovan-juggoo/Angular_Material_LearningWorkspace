(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;
        vm.counter = 0;

        vm.users = getUsers() || [];
        vm.getCounter = getCounter();
        vm.addUser = addUser();

        function addUser() {
            var userSchema = getUserSchema();
            vm.users.push(jsf(userSchema));
        }

        function getCounter() {
            return vm.users.length;
        }

        function getUserSchema() {
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
                        required: ['street', 'city', 'state', 'country', 'zipCode']
                    }
                },
                required: ['id', 'name', 'email', 'address'],
                definitions: {
                    positiveInt: {
                        type: 'integer',
                        minimum: 0,
                        exclusiveMinimum: true
                    }
                }
            };
            return userSchema;
        }

        function getUsers() {
            var users = [];
            var userSchema = getUserSchema();
            for (var x = 0; x < 100; x++) {
                var userData = jsf(userSchema);
                users.push(userData);
            }
            return users;
        }


    }

})();