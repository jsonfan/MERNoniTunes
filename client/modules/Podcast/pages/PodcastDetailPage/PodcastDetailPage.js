import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from '../../components/PodcastListItem/PostListItem.css';

// Import Actions
// import { fetchPost } from '../../PodcastActions';

// Import Selectors
import { getShowDetails } from '../../PodcastReducer';

export function PostDetailPage(props) {
  console.log('post detail props ' , props);
  return (
    <div>
    
      <div className="ui divided items">
        <div className="item">
          <div className="image">
            <img src="http://is5.mzstatic.com/image/thumb/Podcasts122/v4/37/9d/b6/379db6f4-629b-7869-ab40-531fa56532ce/mza_6120789080010223365.jpeg/170x170bb-85.jpg" />
          </div>
          <div className="content">
            <a className="header">12 Years a Slave</a>
            <div className="meta">
              <span className="cinema">Union Square 14</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              <div className="ui label">IMAX</div>
              <div className="ui label"><i className="globe icon"></i> Additional Languages</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui middle aligned divided list">
        <div className="item">
          <div className="right floated content">
            <div className="ui button">Play</div>
          </div>
          <img className="ui avatar image" src="http://is5.mzstatic.com/image/thumb/Podcasts122/v4/37/9d/b6/379db6f4-629b-7869-ab40-531fa56532ce/mza_6120789080010223365.jpeg/170x170bb-85.jpg" />
          <div className="content">
            Lena
          </div>
        </div>
      </div>

    </div>
  );
}

// Actions required to provide data for this component to render in sever side.


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    showDetails: getShowDetails(state, props.params.collectionId),
  };
}


export default connect(mapStateToProps)(PostDetailPage);
