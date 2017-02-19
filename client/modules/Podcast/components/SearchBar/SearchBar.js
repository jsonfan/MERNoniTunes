import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchPodcastSearchResults} from '../../PodcastActions';
import { getPodcasts } from '../../PodcastReducer';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  }

  handleOnKeyPress(e) {
    if (e.charCode === 13 ) {
      const value = e.target.value.trim();

      if (value !== '') {
        this.props.fetchPodcastSearchResults(value);
        this.context.router.push('/');
      }
    }
  }


  render() {
    return (
      <div className="ui big fluid icon input">
          <input
            placeholder="politics, sports, stories"
            className="form-control"
            onKeyPress={this.handleOnKeyPress}
          />
          <i className="search icon"></i>
      </div>
    )
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object,
};


// Retrieve data from store as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPodcastSearchResults }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
