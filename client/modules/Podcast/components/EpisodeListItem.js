import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function EpisodeListItem(props) {
  return (
    <tr>
      <td>{props.episode.title}</td>
      <td>{props.episode.description}</td>
      <td>{props.episode.enclosures[0].url} <i className="ion-play"></i></td>
    </tr>
  );
}

export default EpisodeListItem;
