// Import Actions
import { ADD_PODCASTS, GET_SHOW_DETAILS } from '../Podcast/PodcastActions';
// Initial State
const initialState = {
  // podcasts: [],
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PODCASTS:
      // console.log('reducer add podcasts' , action.podcasts);
      return {
        podcasts: action.podcasts,
      };
    case GET_SHOW_DETAILS:
      console.log('app reducer show details' , action);
      return {
        showDetails: action.showDetails,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getPodcasts = state => state.app.podcasts;
export const getShowDetails = state => state.app.showDetails;

// Export Reducer
export default AppReducer;
