// [name, num channels]

var names = [
  "Earth Archon",
  "Dullahan",
  "Earth Templeshooter",
  "Necroventer"
]

var numChannels = [5, 3, 6, 10]

db.dropDatabase();

for (var i = 0; i < names.length; i++) {
  db.bosses.insert({
    name: names[i],
    img: names[i].toLowerCase().split(' ').join('_') + '.png',
    channels: (function() {
      result = [];

      for (var j = 0; j < numChannels[i]; j++) {
        result.push({
          status: 'down',
          lastKilled: Date.now()
        });
      }

      return result;
    })()
  });
}
