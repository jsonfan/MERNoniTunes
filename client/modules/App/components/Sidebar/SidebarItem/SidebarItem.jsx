import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

export function SidebarItem(props, context) {

  return (
    <li>
      <Link to={props.link} >
        {props.title}
      </Link>
    </li>
  );
}
SidebarItem.propTypes = {

};

export default SidebarItem;
