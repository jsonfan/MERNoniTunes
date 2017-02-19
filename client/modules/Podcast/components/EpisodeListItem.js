import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function EpisodeListItem(props) {
  return (
    <div className="four wide column">
      {props.episode.title}
      {props.episode.description}
      {props.episode.enclosures[0].url}
    </div>
  );
}

export default EpisodeListItem;
