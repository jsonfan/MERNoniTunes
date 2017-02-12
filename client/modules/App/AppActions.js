// Export Constants
import callApi from '../../util/apiCaller';

export const ADD_PODCASTS = 'ADD_PODCASTS';


// Export Actions

export function fetchCharts() {
  console.log('fetching charts app');
  return (dispatch) => {
    return callApi('charts').then(res => {
      // console.log('fetcha char',res);
      dispatch(addPodcasts(res));
    });
  }
}


export function addPodcasts(podcasts) {
  console.log('addPodsies app');
  // console.log('return to pl',podcasts);
  return {
    type: ADD_PODCASTS,
    podcasts,
  };
}
