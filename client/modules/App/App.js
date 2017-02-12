import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import SearchBar from '../Podcast/components/SearchBar/SearchBar';
// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';
import { fetchCharts } from './AppActions';

import { getPodcasts } from './AppReducer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Podcastic!"
            titleTemplate="%s"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
            link={[
              {rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"},
              {rel: "stylesheet", href: "//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"}
            ]}
          />
          <div className="ui inverted vertical masthead center aligned segment">
              <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                  <div className="right item">
                    <a className="ui inverted button">Log in</a>
                    <a className="ui inverted button">Sign Up</a>
                  </div>
                </div>
              </div>
              <div className="ui text container">
                <h1 className="ui inverted header">
                  <Link to="/">
                    Podcastic
                    <i className="icon ion-mic-c"></i>
                  </Link>
                </h1>
                <SearchBar />
              </div>
            </div>
          <div className="ui vertical stripe segment">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
