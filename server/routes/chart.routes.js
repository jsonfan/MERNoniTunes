import { Router } from 'express';
import * as ChartController from '../controllers/chart.controller';
const router = new Router();

// Get charts
router.route('/charts').get(ChartController.getCharts);

export default router;
