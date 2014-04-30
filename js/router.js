StatTracker.Router.map(function() {
  this.resource('teams', { path:'/' }, function() {
    this.resource('newTeam', { path: 'team/new' }),
    this.resource('team', { path:'/team/:team_id' }, function() {
      this.resource('player', { path: '/player/:player_id' });
    });
  });
});

StatTracker.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

StatTracker.NewTeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team')
  }
});

StatTracker.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team', params.team_id);
  }
});

StatTracker.PlayerRoute = Ember.Route.extend( {
  model: function(params) {
    return this.store.find('player_id', params.player_id)
  }
});
