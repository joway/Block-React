import React, { Component, PropTypes } from "react";
import { Row, Col, Pagination } from "antd";

class Paging extends Component {
  render () {
    const { total, current } = this.props;
    return (
      <Row className="content-block p-30">
        <Col span={20} offset={2}>
          <Pagination showQuickJumper defaultCurrent={current} total={total}/>,
        </Col>
      </Row>
    );
  }
}

Paging.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

Paging.defaultProps = {};

export default Paging;