/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Podcast/PodcastReducer';
import podcasts from './modules/Podcast/PodcastReducer';
import intl from './modules/Intl/IntlReducer';
import showDetails from './modules/Podcast/ShowDetailsReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  showDetails,
  podcasts,
  intl,
});
