$(document).bind("mobileinit", function(){
  $.mobile.defaultPageTransition = 'slide';
});

$(function() {
  // initialize client with app credentials
  SC.initialize({
    client_id: 'c96c39c3a9e0e0cb272b834ee9b8915d',
    redirect_uri: 'http://livevibes.herokuapp.com/#events'
  });

  $('.connect-soundcloud').click(function() {
    // initiate auth popup
    SC.connect(function() {
      SC.get('/me', function(me) {
        alert('Hello, ' + me.username);
      });
    });
    return false;
  })

});


/*
App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
*/
