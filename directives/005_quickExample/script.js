(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('MainController', ['imageFactory', MainController]);

    function MainController(imageFactory) {
        var vm = this;
        vm.mutants = [];

        var images = [];

        getMutants();

        function getMutants() {
            imageFactory.listFiles()
                .then(function (response) {
                    images = response.data || [];
                    images.map(function (image) {

                        var mutant = {
                            id: Math.random().toString(36).slice(2),
                            image: image,
                            name: getCharacter(image),
                            summary: chance.sentence({
                                words: 5
                            }),
                            description: chance.paragraph()
                        }
                        vm.mutants.push(mutant);
                    });
                });
        }

        function getCharacter(image) {
            var prefix = 'X-Men-Character-Guide-';
            var suffix = '-570x320.jpg';
            var character = image.substring(image.indexOf(prefix) + prefix.length, image.lastIndexOf(suffix))
                .replace(/-/g, ' ');
            return character;
        }

    }
})();