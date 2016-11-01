import React from "react";
import { bindActionCreators } from "redux";
import { async } from "redux-api";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import rest from "../../../common/rest";
import LoginComponent from "../components/LoginComponent";
import Wrapper from "../../../components/decorator/Wrapper";
import { browserHistory } from "react-router";
import { successDialog, errorDialog } from "../../../utils/dialog";

const { actions } = rest;


@connect((state) => ({
  loginState: state.authLogin
}))
class LoginContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  login = (email, password, redirect = '/') => {
    const { dispatch } = this.props;

    localStorage.removeItem('token');
    async(dispatch,
      (cb) => actions.authLogin({}, {
        body: JSON.stringify({ email, password })
      }, cb)).then((data) => {
      console.log(data);
        if (data.error) {
          errorDialog(data.detail);
          return;
        }
        successDialog(data.detail);
        localStorage.setItem('token', data.token);
        dispatch(actions.user());
        browserHistory.push(redirect);
      }
    );
  };

  render () {
    return (
      <Wrapper>
        <LoginComponent login={this.login}/>
      </Wrapper>
    )
  }
}

export default LoginContainer;
