(function () {
    'use strict';
    angular.module('myApp')
        .factory('UserFactory', [UserFactory]);

    function UserFactory() {
        var schema = {
            type: 'object',
            properties: {
                user: {
                    type: 'object',
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
                        }
                    },
                    required: ['id', 'name', 'email']
                }
            },
            required: ['user'],
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
                var sample = jsf(schema);
                array.push(sample);
            }
           return array;
        }
    }

})();