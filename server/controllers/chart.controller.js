import request from 'request-sync';
/**
 * Get charts
 * @param req
 * @param res
 * @returns void
 */
export function getCharts(req, res) {
  const LIMIT = 15;
  console.log('getting chart response');
  var response = request({method: 'GET', uri: `https://itunes.apple.com/us/rss/toppodcasts/limit=${LIMIT}/explicit=true/json`});
  var result = JSON.parse(response.body);
  var jsonResponse = [];
  result.feed.entry.forEach((entry) => {
    jsonResponse.push(
      {
        "collectionName"  : entry['im:name'].label,
        "artistName"      : entry['im:artist'].label,
        "artworkUrl600"   : entry['im:image'][2].label,
        "collectionId"    : entry.id.attributes['im:id']
      }
    )
  });
  res.json(jsonResponse);
}

/*
arts = 1301
business = 1321
comedy = 1303
education = 1304
games and hobbies = 1323
government and organizations = 1325
health = 1307
kids and family = 1305
music = 1310
news and politics = 1311
religion and spirituality = 1314
science and medicine = 1315
society and culture = 1324
sports and recreation = 1316
technology = 1318
tv and film = 1309
 */
