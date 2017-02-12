import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function PodcastListItem(props) {
  return (
    <div className="four wide column">
      <div className="ui card">
        <Link to={`/show/${props.podcast.collectionId}`} className="image">
          <img className="podcast-image" src={props.podcast.artworkUrl600} />
        </Link>
      </div>
    </div>
  );
}

export default PodcastListItem;
