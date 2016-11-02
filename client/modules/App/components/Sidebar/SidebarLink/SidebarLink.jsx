import React, { PropTypes } from 'react';


var SidebarLink = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
});



SidebarLink.propTypes = {

};

export default SidebarLink;
