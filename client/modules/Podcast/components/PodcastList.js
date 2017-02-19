import React, { PropTypes } from 'react';

// Import Components
import PodcastListItem from './PodcastListItem/PodcastListItem';

function PodcastList(props) {

  return (
    <div className="ui grid">
      {
        props.podcasts.map(podcast => (
          <PodcastListItem
            podcast={podcast}
            key = {podcast.collectionId}
          />
        ))
      }
    </div>
  );
}

export default PodcastList;
