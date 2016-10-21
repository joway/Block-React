import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText,
  login              : state.login
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch),
  dispatch
});


@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
  constructor (props) {
    super(props);
    const redirectRoute = this.props.location.query.redirect || '/login';
    this.state = {
      email: '',
      password: '',
      redirectTo: redirectRoute
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  login = (e) => {
    e.preventDefault();
    const { authUserLogin } = this.props.actions;
    const { dispatch } = this.props;
    dispatch(authUserLogin(this.state.email, this.state.password, this.state.redirectTo));
  }

  render () {
    const { email , password } = this.state;
    return (
      <div>
        <input type="text" id="email" placeholder="email" value={ email } onChange={this.handleChange}/>
        <input type="password" id="password" placeholder="password" value={ password } onChange={this.handleChange}/>
        <button onClick={this.login}>Login</button>
        <h1>{ this.props.login.isLogin }</h1>
      </div>
    )
  }
}

export default Login
