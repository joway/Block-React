import React, { Component } from "react";
import { Row, Col, Card, Icon, Tooltip } from "antd";
import "./Profile.css";

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
            <Tooltip title="Github">
              <Col span={6}><i className="icon iconfont profile-icon github"><a href="https://github.com/joway"
                                                                                target="_blank">&#xe94a;</a></i></Col>
            </Tooltip>
            <Tooltip title="Instagram">
              <Col span={6}><i className="icon iconfont profile-icon instagram"><a
                href="https://www.instagram.com/joway.w/" target="_blank">&#xe95c;</a></i></Col>
            </Tooltip>
            <Tooltip title="Twitter">
              <Col span={6}><i className="icon iconfont profile-icon twitter"><a href="https://twitter.com/JowayW"
                                                                                 target="_blank">&#xe999;</a></i></Col>
            </Tooltip>
            <Tooltip title="知乎">
              <Col span={6}><i className="icon iconfont profile-icon zhihu"><a href="https://www.zhihu.com/people/Joway"
                                                                               target="_blank">&#xe61b;</a></i></Col>
            </Tooltip>
            <Tooltip title="Email">
              <Col span={6} offset={3}><i className="icon iconfont profile-icon email"><a
                href="mailto:joway.w@gmail.com" target="_blank">&#xe604;</a></i></Col>
            </Tooltip>
            <Tooltip title="Linkedin">
              <Col span={6}><i className="icon iconfont profile-icon linkedin"><a
                href="https://www.linkedin.com/in/jowaywang" target="_blank">&#xe639;</a></i></Col>
            </Tooltip>
            <Tooltip title="Resume">
              <Col span={6}><i className="icon iconfont profile-icon resume"><a href="https://joway.github.io/Resume/"
                                                                                target="_blank">&#xe627;</a></i></Col>
            </Tooltip>
          </Row>
        </Row>
      </Card>
    );
  }
}