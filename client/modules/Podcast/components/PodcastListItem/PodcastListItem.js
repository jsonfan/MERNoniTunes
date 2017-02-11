import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css'

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
