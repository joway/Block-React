import React, { Component, PropTypes } from 'react';
import { Row, Col, Pagination } from 'antd';

export default class Paging extends Component {
  static propTypes = {};

  render () {
    return (
      <Row className="content-block p-30">
        <Col span={20} offset={2}>
          <Pagination showQuickJumper defaultCurrent={2} total={500} />,
        </Col>
      </Row>
    );
  }
}