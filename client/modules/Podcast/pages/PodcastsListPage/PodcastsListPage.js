import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PodcastList from '../../components/PodcastList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest, fetchCharts } from '../../PodcastActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPodcasts } from '../../PodcastReducer';

class PodcastsListPage extends Component {
  componentDidMount() {
    // this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchCharts());
  }

  // handleDeletePost = post => {
  //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
  //     this.props.dispatch(deletePostRequest(post));
  //   }
  // };
  //
  // handleAddPost = (name, title, content) => {
  //   this.props.dispatch(toggleAddPost());
  //   this.props.dispatch(addPostRequest({ name, title, content }));
  // };

  render() {
    // console.log('props',this.props);
    return (
      <div className="ui four column doubling stackable grid container">
        <div className="ui fluid selection dropdown">
          <i className="dropdown icon"></i>
          <div className="default text">Select Genre</div>
          <div className="menu">
            <div className="item">Arts</div>
            <div className="item">Business</div>
            <div className="item">Comedy</div>
            <div className="item">Education</div>
            <div className="item">Games & Hobbies</div>
            <div className="item">Government & Organizations</div>
            <div className="item">Health</div>
            <div className="item">Kids & Family</div>
            <div className="item">Music</div>
            <div className="item">News & Politics</div>
            <div className="item">Religion & Spirituality</div>
            <div className="item">Science & Medicine</div>
            <div className="item">Society & Culture</div>
            <div className="item">Sports & Recreation</div>
            <div className="item">Technology</div>
            <div className="item">TV & Film</div>
          </div>
        </div>
        <PodcastList podcasts={this.props.podcasts} />
        {/*<PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />*/}
        {/*<PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />*/}

      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// PodcastsListPage.need = [() => { return fetchPosts(); }];
// PodcastsListPage.need = [() => { return fetchCharts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    podcasts: getPodcasts(state),
  };
}
//
// PodcastsListPage.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//   })).isRequired,
//   showAddPost: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

PodcastsListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PodcastsListPage);
