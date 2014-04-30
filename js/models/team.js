StatTracker.Team = DS.Model.extend({
  players: DS.hasMany('player', {async:true}),
  name: DS.attr('string')
});

StatTracker.Team.FIXTURES = [
  {
    id: 1,
    name: 'Jailblazers',
    players: ['1','2']
  },
  {
    id: 2,
    name: 'Whiny Howard and the Rockettes',
    players: ['3','4']
  }
];
