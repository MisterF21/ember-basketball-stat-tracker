StatTracker.Player = DS.Model.extend({
  team: DS.belongsTo('team', {async:true}),
  stats: DS.hasMany('stat', {async:true}),
  name: DS.attr('string'),
  stats: DS.attr('integer')
});

StatTracker.Player.FIXTURES = [
  {
    id: 1,
    team: 1,
    name: 'Mo Williams',
    stats: [1, 2]
  },
  {
    id: 2,
    team: 1,
    name: 'LaMarcus Aldridge'
  },
  {
    id: 3,
    team: 2,
    name: "Dwight Howard"
  },
  {
    id: 4,
    team: 2,
    name: 'Jeremy Lin'
  }
];
