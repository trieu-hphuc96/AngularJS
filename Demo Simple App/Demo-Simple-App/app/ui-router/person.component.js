angular.module('demo-ui-router').component('person', {
    bindings: { person: '<' },
    template: '<h3>A person!</h3>' +
    
              '<div>Name: {{$ctrl.person.name}}</div>' +
              '<div>Id: {{$ctrl.person.id}}</div>' +
              '<div>Company: {{$ctrl.person.company}}</div>' +
              '<div>Email: {{$ctrl.person.email}}</div>' +
              '<div>Address: {{$ctrl.person.address}}</div>' +
              
              '<button class="btn btn-light" ui-sref="people">Close</button>'
  });