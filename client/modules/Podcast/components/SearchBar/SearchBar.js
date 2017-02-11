import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import {fetchPodcastSearchResults} from '../../PodcastActions';
import { getPodcasts } from '../../PodcastReducer';
//import style

export class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  // }


  onFormSubmit(event) {
    console.log('submitted');
    console.log('do search action here');
    event.preventDefault();
    fetchPodcastSearchResults('nba');
    // this.props.fetch
    // this.props.dispatch(fetchPodcastSearchResults('nba'));
  }

  onInputChange(term) {
    // console.log(term);
    // this.props.onTermChange(term);
  }

  handleOnKeyPress(e) {
    if (e.charCode === 13 ) {
      // const { dispatch } = this.props;
      const value = e.target.value.trim();

      if (value !== '') {
        console.log('entered ' + value);
        // navigate to search results page
        fetchPodcastSearchResults(value);
      }
    }
  }


  render() {
    return (
      <div className="ui big fluid icon input">
          <input
            placeholder="politics, sports, stories"
            className="form-control"
            onChange={event => this.onInputChange(event.target.value)}
            onKeyPress={this.handleOnKeyPress}
          />
          <i className="search icon"></i>
      </div>
    )
  }
}


// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    podcasts: getPodcasts(state),
  };
}

export default connect(mapStateToProps)(SearchBar);
