import { GET_SHOW_DETAILS } from './PodcastActions';

// Initial State
const initialState = { data: [] };

const ShowDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOW_DETAILS :
      console.log('reducer get show details reducer ' , action);
      console.log('the state in show details redcuer ' , state);
      return {
        data: action.showDetails
      };
    default:
      return state;
  }
};

/* Selectors */
export const getShowDetails = state => state.showDetails.data;


// Export Reducer
export default ShowDetailsReducer;
