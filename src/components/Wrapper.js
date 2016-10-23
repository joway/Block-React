import React, { Component, PropTypes } from 'react';
import { Row, Col, Card } from 'antd';

class Wrapper extends Component {
  render () {
    const {size} = this.props;
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={size}>
          <Card className="content-block">
            <Row type="flex" justify="space-around" align="middle" className="m-30 p-30">
              <Col span={18}>
                {this.props.children}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  };
}

Wrapper.propTypes = {
  size: PropTypes.number
};

Wrapper.defaultProps = {
  size: 12
};


export default Wrapper;