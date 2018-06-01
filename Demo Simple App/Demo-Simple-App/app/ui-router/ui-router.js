angular.module('demo-ui-router')
    .config(function ($stateProvider) {
        // An array of state definitions
        var states = [
            {
                name: 'hello',
                url: '/hello',
                // Using component: instead of template:
                component: 'hello'
            },

            {
                name: 'about',
                url: '/about',
                component: 'about'
            },

            {
                name: 'people',
                url: '/people',
                component: 'people',
                // This state defines a 'people' resolve
                // It delegates to the PeopleService to HTTP fetch (async)
                // The people component receives this via its `bindings: `
                resolve: {
                    people: function (PeopleService) {
                        return PeopleService.getAllPeople();
                    }
                }
            },

            {
                name: 'people.person',
                // This state takes a URL parameter called personId
                url: '/{personId}',
                component: 'person',
                // This state defines a 'person' resolve
                // It delegates to the PeopleService, passing the personId parameter
                resolve: {
                    person: function (people, $stateParams) {
                        return people.find(function (person) {
                            return person.id === $stateParams.personId;
                        });
                    }
                }
            }
        ]

        // Loop over the state definitions and register them
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });

// To account for plunker embeds timing out, preload the async data
demoUIRouter.run(function ($http) {
    $http.get('app/ui-router/people.data.json', { cache: true });
});

// Show state tree
// demoUIRouter.run(function ($uiRouter) {
//     var StateTree = window['ui-router-visualizer'].StateTree;
//     var el = StateTree.create($uiRouter, null, { height: 100, width: 300 });
//     el.className = 'statevis';
// });

demoUIRouter.run(function($http, $uiRouter) {
    var Visualizer = window['ui-router-visualizer'].Visualizer;
    $uiRouter.plugin(Visualizer);
    $http.get('app/ui-router/people.data.json', { cache: true });
  });
