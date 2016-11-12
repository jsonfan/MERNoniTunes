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
import { getCharts } from '../../PodcastReducer';

class PodcastChartsPage extends Component {
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
      <div>
        <div> Top 15 Podcasts </div>
        <PodcastList podcasts={this.props.podcasts} />
        {/*<PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />*/}
        {/*<PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />*/}

      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// PodcastChartsPage.need = [() => { return fetchPosts(); }];
PodcastChartsPage.need = [() => { return fetchCharts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    podcasts: getCharts(state),
  };
}
//
// PodcastChartsPage.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//   })).isRequired,
//   showAddPost: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

PodcastChartsPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PodcastChartsPage);
