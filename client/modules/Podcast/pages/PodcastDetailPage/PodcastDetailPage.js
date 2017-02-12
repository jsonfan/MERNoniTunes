import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

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
      <div>
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
              <div className="description">
                <p></p>
              </div>
              <div className="extra">
                <div className="ui label">{showDetails.trackExplicitness}</div>
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
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    showDetails: getShowDetails(state),
  };
}

export default connect(mapStateToProps)(PodcastDetailPage);
