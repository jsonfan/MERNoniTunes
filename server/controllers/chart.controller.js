import request from 'request-sync';
/**
 * Get charts
 * @param req
 * @param res
 * @returns void
 */
export function getCharts(req, res) {
  const LIMIT = 15;
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
