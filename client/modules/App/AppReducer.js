// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { ADD_PODCASTS } from '../Podcast/PodcastActions';
// Initial State
const initialState = {
  // podcasts: [],
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
    case ADD_PODCASTS:
      // console.log('reducer add podcasts' , action.podcasts);
      return {
        podcasts: action.podcasts,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getPodcasts = state => state.app.podcasts;

// Export Reducer
export default AppReducer;
