// [name, num channels]
// Current Boss Schema:
// ***
// boss: {
//   name: string,
//   img: string,
//   channels: [
//     ...
//     channel: {
//       status: string,
//       lastKilled: date
//     }
//   ]
// }
// ***

var names = [
  ["Earth Archon", 5],
  ["Dullahan", 3],
  ["Earth Templeshooter", 7],
  ["Necroventer", 2]
]

db.dropDatabase();

for (var i = 0; i < names.length; i++) {
  db.bosses.insert({
    name: names[i][0],
    img: names[i][0].toLowerCase().split(' ').join('_') + '.png',
    channels: (function() {
      result = [];

      for (var j = 0; j < names[i][1]; j++) {
        result.push({
          status: 'down',
          lastKilled: Date.now()
        });
      }

      return result;
    })()
  });
}
