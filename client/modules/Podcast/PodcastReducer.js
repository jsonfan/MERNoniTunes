import { ADD_POST, ADD_POSTS, DELETE_POST, ADD_PODCASTS } from './PodcastActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
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
    case ADD_PODCASTS:
      return {
        data: action.podcasts,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
// export const getPosts = state => state.posts.data;
export const getCharts = state => state.podcasts.data;
// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
