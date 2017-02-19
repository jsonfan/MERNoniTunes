// Import Actions
import { ADD_PODCASTS, GET_SHOW_DETAILS, GET_EPISODES } from '../Podcast/PodcastActions';
// Initial State
const initialState = {
  // podcasts: [],
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PODCASTS:
      return {
        podcasts: action.podcasts,
      };
    case GET_SHOW_DETAILS:
      console.log('app reducer show details' , action);
      return {
        showDetails: action.showDetails,
      };
    case GET_EPISODES:
    console.log('app reducer episodes' , action);
      return {
        episodes: action.episodes,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getPodcasts = state => state.app.podcasts;
export const getShowDetails = state => state.app.showDetails;
export const getEpisodes = state => state.app.episodes;
// Export Reducer
export default AppReducer;
