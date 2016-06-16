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

// [name, channel, cooldown]
var info = [
  ["Earth Archon", 5, 4],
  ["Dullahan", 3, 2],
  ["Earth Templeshooter", 7, 4],
  ["Necroventer", 2, 6]
];

db.dropDatabase();

for (var i = 0; i < info.length; i++) {
  db.bosses.insert({
    name: info[i][0],
    img: info[i][0].toLowerCase().split(' ').join('_') + '.png',
    cooldown: info[i][2],
    channels: (function() {
      result = [];

      for (var j = 0; j < info[i][1]; j++) {
        result.push({
          status: 'down',
          lastKilled: new Date
        });
      }

      return result;
    })()
  });
}
