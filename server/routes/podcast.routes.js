import { Router } from 'express';
import * as PodcastController from '../controllers/podcast.controller';
const router = new Router();

// Get lookup
router.route('/lookup/:id').get(PodcastController.getLookupDetailsFromId);
router.route('/search/:terms').get(PodcastController.getSearchResult);
router.route('/episodes/*').get(PodcastController.getEpisodes);


export default router;
