StatTracker.Player = DS.Model.extend({
  team: DS.belongsTo('team', {async:true}),
  teamId: DS.attr('integer'),
  name: DS.attr('string')
});

StatTracker.Player.FIXTURES = [
  {
    id: '1',
    team: 1,
    name: 'Mo Williams'
  },
  {
    id: '2',
    team: 1,
    name: 'LaMarcus Aldridge'
  }
];
