// Export Constants
import callApi from '../../util/apiCaller';

export const ADD_PODCASTS = 'ADD_PODCASTS';

// Export Actions
export function fetchCharts() {
  return (dispatch) => {
    return callApi('charts').then(res => {
      dispatch(addPodcasts(res));
    });
  }
}

export function addPodcasts(podcasts) {
  return {
    type: ADD_PODCASTS,
    podcasts,
  };
}
