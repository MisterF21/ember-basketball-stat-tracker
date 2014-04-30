StatTracker.Stat = DS.Model.extend({
  player: DS.belongsTo('player',
  scored: DS.attr('string'),
  player_id: DS.attr('integer')
});


StatTracker.Stat.FIXTURES = [
  {
  id: 1,
  scored: "true",
  player_id: 1
  },
  {
  id: 2,
  scored: "false",
  player_id: 1
  }
];
