import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import './Footer.css';

export default class Footer extends Component {
  static propTypes = {};

  render () {
    return (
      <Row className="content-center m-t-50 footer-box">
        <footer className="footer">
          <p>本站已运行了 xx 天</p>
          <p>
            托管于 阿里云. 七牛 提供静态文件云存储服务. Google Analytics 提供网站统计服务. CloudXNS 提供 DNS 解析服务.
          </p>
          <p>
            © 2016 城西乱谈. 站点地图. 备案号 xxx .
          </p>
          <p>
            Made with by Joway.
          </p>
        </footer>
      </Row>
    );
  }
}