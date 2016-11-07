import { Router } from 'express';
import * as PodcastController from '../controllers/podcast.controller';
const router = new Router();

// Get lookup
router.route('/lookup/:id').get(PodcastController.getLookupDetailsFromId);


export default router;
