StatTracker.Player = DS.Model.extend({
  team: DS.belongsTo('team'),
  stats: DS.hasMany('stat'),
  name: DS.attr('string'),
  stats: DS.attr('string')
});

StatTracker.Player.FIXTURES = [
  {
    id: 1,
    team: 1,
    name: 'Mo Williams',
    stats: ['score', 'miss']
  },
  {
    id: 2,
    team: 1,
    name: 'LaMarcus Aldridge',
    stats: ['miss', 'score', 'score']
  },
  {
    id: 3,
    team: 2,
    name: "Dwight Howard",
    stats: ['miss', 'miss']
  },
  {
    id: 4,
    team: 2,
    name: 'Jeremy Lin',
    stats: ['miss', 'miss', 'score']
  }
];
