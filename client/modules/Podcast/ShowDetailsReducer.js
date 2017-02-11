import { GET_SHOW_DETAILS } from './PodcastActions';

// Initial State
const initialState = { data: [] };

const ShowDetailsReducer = (state = initialState, action) => {
  // console.log('post reducer');
  // console.log('am i here again');
  switch (action.type) {
    // case ADD_POST :
    //   return {
    //     data: [action.post, ...state.data],
    //   };
    //
    // case ADD_POSTS :
    //   console.log('datatat', action.posts);
    //   return {
    //     data: action.posts,
    //   };
    //
    // case DELETE_POST :
    //   return {
    //     data: state.data.filter(post => post.cuid !== action.cuid),
    //   };
    case GET_SHOW_DETAILS :
      console.log('reducer get show details reducer ' , action);
      console.log('the state in show details redcuer ' , state);
      return {
        data: action.showDetails
      };
    // case ADD_PODCASTS:
    //   console.log('reducer add podcasts' , action.podcasts);
    //   return {
    //     data: action.podcasts,
    //   };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
// export const getPosts = state => state.posts.data;
// export const getPodcasts = state => state.podcasts.data;
export const getShowDetails = state => state.showDetails.data;
// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default ShowDetailsReducer;
