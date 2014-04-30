StatTracker.Router.map(function() {
  this.resource('teams', { path:'/' }, function() {
    this.resource('team', { path:'/team/:team_id' }, function() {
      this.resource('player', { path: '/team/:team_id/player' });
    });
  });
});

StatTracker.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

StatTracker.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return teams.findBy('id', params.team_id);
  }
});

StatTracker.PlayersRoute = Ember.Route.extend( {
  model: function(params) {
    return players.findBy('team_id', params.team_id);
  }
});
