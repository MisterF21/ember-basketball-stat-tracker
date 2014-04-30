StatTracker.Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.resource('team', { path:'/team/:team_id' });
  });
});

StatTracker.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});
