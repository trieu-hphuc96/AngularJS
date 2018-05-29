angular.module('greet-user')
    .component('greetUser', {
        template: 'Hello, {{$ctrl.user}}!',
        controller: function GreetUserController() {
            this.user = 'world!!!';
        }
    });