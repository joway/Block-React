import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import './Profile.css';

export default class Profile extends Component {
  static propTypes = {};

  render () {
    return (
      <Card style={{textAlign: 'center'}} className="content-block">
        <Row>
          <img alt="logo" height="256px" className="round" src="https://joway.wang/assets/img/logo.jpg"/>
        </Row>
        <Row>
          <Row className="m-10"><h2>Joway Wang</h2></Row>
          <Row className="m-10"><p>在一条全栈路上努力的弱栈渣渣</p></Row>
          <Row style={{ textAlign: 'center' }}>
            <Col span={6}><i className="icon iconfont profile-icon github"><a href="#">&#xe94a;</a></i></Col>
            <Col span={6}><i className="icon iconfont profile-icon instagram"><a href="#">&#xe95c;</a></i></Col>
            <Col span={6}><i className="icon iconfont profile-icon twitter"><a href="#">&#xe999;</a></i></Col>
            <Col span={6}><i className="icon iconfont profile-icon zhihu"><a href="#">&#xe61b;</a></i></Col>
            <Col span={6} offset={3}><i className="icon iconfont profile-icon email"><a href="#">&#xe604;</a></i></Col>
            <Col span={6}><i className="icon iconfont profile-icon linkedin"><a href="#">&#xe639;</a></i></Col>
            <Col span={6}><i className="icon iconfont profile-icon resume"><a href="#">&#xe627;</a></i></Col>
          </Row>
        </Row>
      </Card>
    );
  }
}