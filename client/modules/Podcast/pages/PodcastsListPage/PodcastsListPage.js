import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PodcastList from '../../components/PodcastList';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest, fetchCharts } from '../../PodcastActions';

// Import Selectors
import { getPodcasts } from '../../PodcastReducer';

class PodcastsListPage extends Component {
  componentDidMount() {
    if (!this.props.podcasts) {
      this.props.dispatch(fetchCharts());
    }
  }

  render() {
    // console.log('props',this.props);
    return (
      <div className="ui four column doubling stackable grid container">
        <div className="ui fluid selection dropdown">
          <i className="dropdown icon"></i>
          <div className="default text">Select Genre</div>
          <div className="menu">
            <div className="item">Arts</div>
            <div className="item">Business</div>
            <div className="item">Comedy</div>
            <div className="item">Education</div>
            <div className="item">Games & Hobbies</div>
            <div className="item">Government & Organizations</div>
            <div className="item">Health</div>
            <div className="item">Kids & Family</div>
            <div className="item">Music</div>
            <div className="item">News & Politics</div>
            <div className="item">Religion & Spirituality</div>
            <div className="item">Science & Medicine</div>
            <div className="item">Society & Culture</div>
            <div className="item">Sports & Recreation</div>
            <div className="item">Technology</div>
            <div className="item">TV & Film</div>
          </div>
        </div>
        <PodcastList podcasts={this.props.podcasts} />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    podcasts: getPodcasts(state),
  };
}

PodcastsListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PodcastsListPage);
