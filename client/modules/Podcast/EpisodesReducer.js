import { GET_EPISODES } from './PodcastActions';

// Initial State
const initialState = { data: [] };

const EpisodesReducer = (state = initialState, action) => {
  console.log('episodes reducer ' , action);
  switch (action.type) {
    case GET_EPISODES :
      return {
        data: action.episodes
      };
    default:
      return state;
  }
};

/* Selectors */
export const getEpisodes = state => state.episodes.data;

// Export Reducer
export default EpisodesReducer;
