import parser from 'rss-parser';

const ITUNES_CHARTS_RSS_ROOT = "https://itunes.apple.com/us/rss/toppodcasts/limit=";

/**
 * Get charts
 * @param req
 * @param res
 * @returns void
 */
export function getCharts(req, res) {
  console.log('hi');
  console.log('params' , req.params);
  var data = [];
  req.params.limit = 100;
  const ITUNES_CHARTS_RSS = `${ITUNES_CHARTS_RSS_ROOT}${req.params.limit}/xml`;
  parser.parseURL(ITUNES_CHARTS_RSS,(err, parsed) => {
    if (err) {
      res.status(500).send(err);
    }
    parsed.feed.entries.forEach((entry) => {
      data.push(entry);
    });
    // console.log(data);
    res.json(data);
  });
}
