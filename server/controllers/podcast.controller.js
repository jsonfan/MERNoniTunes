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
