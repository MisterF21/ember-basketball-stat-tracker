StatTracker.Stat = DS.Model.extend({
  player: DS.belongsTo('player', {async:true}),
  shot: DS.attr('boolean'),
  player_id: DS.attr('integer')
});


StatTracker.Stat.FIXTURES = [
  {
  id: 1,
  shot: true,
  player_id: '1'
  },
  {
  id: 2,
  shot: false,
  player_id:  '1'
  }
];
