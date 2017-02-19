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


    return (
      <div className="ui grid">
        {this.props.feedUrl}
        { this.props.episodes.items ?
          this.props.episodes.items.map(episode => (
            <EpisodeListItem
              episode={episode}
              key={episode.created}
            />
          ))
          : null
        }
      </div>
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
