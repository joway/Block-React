import React, { Component, PropTypes } from 'react';
import routeConfig from './config/routeConfig';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../styles/github.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

@connect((state) => ({
  isAuthenticated: state.auth.isAuthenticated
}))
class App extends Component {
  render () {
    const NavRoutes = [
      {
        name: 'Blog',
        path: ''
      }, {
        name: 'Bullshit',
        path: 'bullshit'
      }, {
        name: 'Timeline',
        path: 'timeline'
      }, {
        name: 'Photo',
        path: 'photo'
      }, {
        name: 'Lab',
        path: 'lab'
      }, {
        name: 'About',
        path: 'about'
      }
    ];

    return (
      <div className="app">
        <Nav routes={NavRoutes} isAuthenticated={this.props.isAuthenticated}/>
        <div className="page-container">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;