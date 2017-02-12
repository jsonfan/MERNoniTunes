import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PodcastListItem/PodcastListItem';

function PodcastList(props) {
  
  return (
    <div className="ui grid">
      {
        props.podcasts.map(podcast => (
          <PostListItem
            podcast={podcast}
            key = {podcast.collectionId}
          />
        ))
      }
    </div>
  );
}

export default PodcastList;
