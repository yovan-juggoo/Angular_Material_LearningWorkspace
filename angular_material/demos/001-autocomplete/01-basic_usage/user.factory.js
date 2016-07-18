(function () {
    'use strict';
    angular.module('myApp')
        .factory('UserFactory', [UserFactory]);

    function UserFactory() {
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

        return {
            list: list
        }

        function list() {
            var array = [];
            for (var x = 0; x < 100; x++) {
                var sample = jsf(userSchema);
                array.push(sample);
            }
           return array;
        }
    }

})();