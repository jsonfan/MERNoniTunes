import { ADD_POST, ADD_POSTS, DELETE_POST, ADD_PODCASTS } from './PodcastActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PODCASTS:
      console.log('reducer add podcasts' , action.podcasts);
      return {
        data: action.podcasts,
      };
    default:
      return state;
  }
};

/* Selectors */
// Get all podcasts
export const getPodcasts = state => state.podcasts.data;

// Export Reducer
export default PostReducer;
