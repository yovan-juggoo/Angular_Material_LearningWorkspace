(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('MainController', [MainController]);

    function MainController() {
        var vm = this;

        vm.caption = "List of users who like Coca Cola";
        vm.title = "This is a title inside main controller and not the directive";

        vm.users = [];
        vm.getUsers = getUsers;
        vm.getCounter = getCounter;
        vm.addUser = addUser;
        vm.addAdmin = addAdmin;
        
        var admin = {
            id: '007',
            email: 'yovan.juggoo@chb-technologies.ch',
            address: {
                street: 'Avenue Surath',
                city: 'Quatre-Bornes',
                state: 'Plaimes-Wilhems',
                country: 'Mauritius',
                zipCode: '31400'
            }
        };
        
        function addAdmin (name) {
            console.log('name: ', name);
            var containsAdmin = false;
            for (var x = 0; x < vm.users.length; x++) {
                if(vm.users[x].id === admin.id) {
                    containsAdmin = true;
                    break;
                }
            }
            if(!containsAdmin && name) {
                admin.name = name;
                vm.users.unshift(admin);
            }
        }

        function addUser() {
            var userSchema = getUserSchema();
            vm.users.unshift(jsf(userSchema));
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
            vm.users = [];
            var randomnumber = Math.floor(Math.random() * 100);
            var userSchema = getUserSchema();
            for (var x = 0; x < randomnumber; x++) {
                var userData = jsf(userSchema);
                vm.users.push(userData);
            }
            return vm.users;
        }

    }

})();