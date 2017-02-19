import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Components
import EpisodeList from '../../components/EpisodeList';

// Import Actions
import { fetchPodcastByItunesId } from '../../PodcastActions';

// Import Selectors
import { getShowDetails } from '../../ShowDetailsReducer';

class PodcastDetailPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPodcastByItunesId(this.props.params.collectionId));
  }

  render () {
    const showDetails = this.props.showDetails;

    return (
      <div className="ui container">
        <div className="ui divided items">
          <div className="item">
            <div className="image">
              <img src={showDetails.artworkUrl100} />
            </div>
            <div className="content">
              <a className="header">{showDetails.trackName}</a>
              <div className="meta">
                <span className="cinema">{showDetails.artistName}</span>
              </div>
              <div className="extra">
                <div className="ui label">{showDetails.trackExplicitness}</div>
              </div>
            </div>
          </div>
        </div>
        { showDetails.feedUrl ?
          <EpisodeList feedUrl={showDetails.feedUrl} />
          :
          <i className="notched circle loading icon"></i>
        }
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    showDetails: getShowDetails(state),
  };
}

export default connect(mapStateToProps)(PodcastDetailPage);
