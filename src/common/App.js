import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import rest from './config/restConfig';
import 'antd/dist/antd.css';
import '../styles/github.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NavRoutes from './NavRoutes';

const { actions } = rest;

@connect((state) => ({
  user: state.user
}))
class App extends Component {

  componentWillMount = () => {
    this.props.dispatch(actions.user());
  };

  render () {
    const { user } = this.props;
    return (
      <div className="app">
        <Nav routes={NavRoutes} user={user}/>
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