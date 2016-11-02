import callApi from '../../util/apiCaller';

// Export Constants
// export const ADD_POST = 'ADD_POST';
// export const ADD_POSTS = 'ADD_POSTS';
// export const DELETE_POST = 'DELETE_POST';
export const ADD_PODCASTS = 'ADD_PODCASTS';

// // Export Actions
// export function addPost(post) {
//   return {
//     type: ADD_POST,
//     post,
//   };
// }
//
// export function addPostRequest(post) {
//   return (dispatch) => {
//     return callApi('posts', 'post', {
//       post: {
//         name: post.name,
//         title: post.title,
//         content: post.content,
//       },
//     }).then(res => dispatch(addPost(res.post)));
//   };
// }
//
// export function addPosts(posts) {
//   console.log('return to pl posts', posts);
//   return {
//     type: ADD_POSTS,
//     postss,
//   };
// }

export function addPodcasts(podcasts) {
  console.log('addPodsies');
  // console.log('return to pl',podcasts);
  return {
    type: ADD_PODCASTS,
    podcasts,
  };
}

// export function fetchPosts() {
//   return (dispatch) => {
//     return callApi('posts').then(res => {
//       dispatch(addPosts(res.posts));
//     });
//   };
// }
//
// export function fetchPost(cuid) {
//   return (dispatch) => {
//     return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
//   };
// }

export function fetchCharts() {
  console.log('fetching charts');
  return (dispatch) => {
    return callApi('charts').then(res => {
      // console.log('fetcha char',res);
      dispatch(addPodcasts(res));
    });
  }
}
//
// export function deletePost(cuid) {
//   return {
//     type: DELETE_POST,
//     cuid,
//   };
// }
//
// export function deletePostRequest(cuid) {
//   return (dispatch) => {
//     return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
//   };
// }