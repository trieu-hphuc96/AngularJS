angular.module('demo-ui-router')
    .service('PeopleService', function ($http) {
        var service = {
            getAllPeople: function () {
                return $http.get('app/ui-router/people.data.json', { cache: true }).then(function (resp) {
                    return resp.data;
                });
            },

            getPerson: function (id) {
                function personMatchesParam(person) {
                    return person.id === id;
                }

                return service.getAllPeople().then(function (people) {
                    return people.find(personMatchesParam)
                });
            }
        }

        return service;
    })