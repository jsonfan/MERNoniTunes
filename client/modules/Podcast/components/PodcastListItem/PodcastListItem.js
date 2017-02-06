import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css'

function PodcastListItem(props) {
  return (
    <div className="four wide column">
      <div className="ui card">
        <div className="image">
          <img className="podcast-image" src={props.podcast.artworkUrl600} />
        </div>
        <div className="content">
          <a className="header">{props.podcast.collectionName}</a>
        </div>
        <div className="description">
          {props.podcast.artistName}
        </div>
      </div>
      link to lookup/ {props.podcast.collectionId}
    </div>
  );
}

// PostListItem.propTypes = {
//   post: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default PodcastListItem;
