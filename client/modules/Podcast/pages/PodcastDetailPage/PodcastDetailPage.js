import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PodcastListItem/PostListItem.css';

// Import Actions
// import { fetchPost } from '../../PodcastActions';

// Import Selectors
// import { getPost } from '../../PodcastReducer';

export function PostDetailPage(props) {
  return (
    <div>
      podcast detail
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    showDetails: getShowDetails(state),
  };
}


export default connect(mapStateToProps)(PostDetailPage);
