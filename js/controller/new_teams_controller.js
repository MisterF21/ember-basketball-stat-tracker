StatTracker.NewTeamController = Ember.Controller.extend({
  actions: {
    createTeam: function() {
      var name = this.get('newTeam');
      this.set('newTeam');
      name.save();
    }
  }
});
