import React from 'react'
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { async } from "redux-api";
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'antd';
import { rest } from '../../../common';
import Wrapper  from '../../../components/Wrapper';

const { actions } = rest;


@connect((state) => ({}))
class LogoutContainer extends React.Component {
  constructor (props) {
    super(props);
    const redirect = this.props.location.query.redirect || '/';
  }

  logout = () => {
    const { dispatch } = this.props;
    localStorage.removeItem('token');
    async(dispatch,
      (cb) => actions.user(cb)).then((data) => {
        console.log('logout');
        browserHistory.push('/');
      }
    );
  };

  render () {
    return (
      <Wrapper>
        <Row type="flex" justify="space-around" align="middle" className="m-30">
          <Col>
            <h2>你确定要退出吗 ?</h2>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <Button type="ghost" className="m-10" onClick={this.logout}>退出</Button>
            <Button type="primary" className="m-10">
              <Link to="/">取消</Link>
            </Button>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default LogoutContainer;
