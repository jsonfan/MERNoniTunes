import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import SidebarItem from './SidebarItem/SidebarItem';

export function Sidebar(props, context) {
  return (
    <div>
      <ul>
        <SidebarItem
          key = "search"
          link = "/search"
          title = "Search"
        />
        <SidebarItem
          key = "browse"
          link = "/browse"
          title = "Browse"
        />
        <SidebarItem
          key = "playlist"
          link = "/playlist"
          title = "Your Playlist Queue"
        />
        <SidebarItem
          key = "subscriptions"
          link = "/subscriptions"
          title = "Subscriptions"
        />
        <SidebarItem
          key = "account"
          link = "/account"
          title = "Account"
        />
        <SidebarItem
          key = "settings"
          link = "/settings"
          title = "Settings"
        />
      </ul>
    </div>
  );
}
Sidebar.propTypes = {

};

export default Sidebar;
