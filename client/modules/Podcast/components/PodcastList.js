import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PodcastListItem/PodcastListItem';

function PodcastList(props) {
  // console.log('propsheee',props);
  return (
    <div className="listView">
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

// PodcastList.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   })).isRequired,
//   handleDeletePost: PropTypes.func.isRequired,
// };

export default PodcastList;
