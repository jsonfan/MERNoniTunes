import searchitunes from 'searchitunes';
/**
 * Get lookup details
 * @param req
 * @param res
 * @returns void
 */
export function getLookupDetailsFromId(req, res) {
  console.log('getLookupDetailsFromId');
  console.log('params' , req.params);
  searchitunes ({id: req.params.id}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(data);
      }
    }
  );
}

export function getSearchResult(req, res) {
  console.log('searching ' , req.params.terms);
  searchitunes(
    {
      entity: 'podcast',
      country: 'US',
      term: req.params.terms,
      limit: 100
    }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(data.results);
      }
    }
  );
}
