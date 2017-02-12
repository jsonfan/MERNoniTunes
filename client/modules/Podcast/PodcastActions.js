import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_PODCASTS = 'ADD_PODCASTS';
export const GET_PODCAST = 'GET_PODCAST';
export const GET_SHOW_DETAILS = 'GET_SHOW_DETAILS';

export function addPodcasts(podcasts) {
  return {
    type: ADD_PODCASTS,
    podcasts,
  };
}

export function getPodcast(podcasts) {
  return {
    type: GET_PODCAST,
    podcast,
  };
}
export function getShowDetails(showDetails) {
  return {
    type: GET_SHOW_DETAILS,
    showDetails,
  };
}

export function fetchCharts() {
  return (dispatch) => {
    return callApi('charts').then(res => {
      dispatch(addPodcasts(res));
    });
  }
}

export function fetchPodcastByItunesId(iTunesId) {
  console.log('fetching podcast by itunes id', iTunesId);
  return dispatch => {
    return callApi(`lookup/${iTunesId}`).then(res => dispatch(getShowDetails(res)));
  }
}

export function fetchPodcastSearchResults(terms) {
  console.log('fetching pod search resulst ' , terms);
  return dispatch => {
    return callApi(`search/${terms}`).then(res => dispatch(addPodcasts(res)));
  }
}
