import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// Import Components
import EpisodeListItem from './EpisodeListItem';

// Import Actions
import { fetchEpisodes } from '../PodcastActions';

// Import Selectors
import { getEpisodes } from '../EpisodesReducer';

class EpisodeList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEpisodes(this.props.feedUrl));
    // fetchEpisodes(this.props.feedUrl)
    console.log('feed props ' , this.props.episodes);
  }

  render () {
    console.log('episode list' , this.props);
    const episodes = this.props.episodes.items ? this.props.episodes.items : null;

    return (
      <table className="ui collapsing table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            episodes ? episodes.map (episode => (
              <EpisodeListItem
                episode={episode}
                key={episode.created}
              />
            ))
            : <i className="notched circle loading icon"></i>
          }
        </tbody>
      </table>


    );
  }
}
// export default EpisodeList;
// Retrieve data from store as props
function mapStateToProps(state, props) {
  console.log('mapstate ' , state);
  return {
    episodes: getEpisodes(state),
  };
}

export default connect(mapStateToProps)(EpisodeList);
