import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PodcastListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        {props.podcast.collectionName}
      </h3>
      <h4>{props.podcast.artistName}</h4>
      <img className="podcast-image" src={props.podcast.artworkUrl600} />
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
