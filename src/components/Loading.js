import React from 'react'
import { Row, Col, Spin, Card } from 'antd';

class Loading extends React.Component {
  render () {
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={8}>
          <Card className="content-block loading-block">
            <Row type="flex" justify="space-around" align="middle">
              <Col className="content-center">
                <h3>正在努力加载中 ...... </h3>
                <Spin size="small" className="m-30"/>
                <Spin className="m-30"/>
                <Spin size="large" className="m-30"/>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Loading
