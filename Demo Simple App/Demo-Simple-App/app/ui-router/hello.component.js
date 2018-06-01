angular.module('demo-ui-router').component('hello', {
    template:  '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
               '<button class="btn btn-light" ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
             
    controller: function() {
      this.greeting = 'Hello';
    
      this.toggleGreeting = function() {
        this.greeting = (this.greeting == 'Hello') ? 'Whats up' : 'Hello'
      }
    }
  })