import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col, Card, Carousel } from 'antd';

import '../Photo.css'

const { actions } = rest;

@connect((state) => ({}))
class PhotoContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block">
            <Row className="content-center">
              <Col span={18} offset={3}>
                <Carousel autoplay effect="fade">
                  <Row type="flex" justify="space-around" align="middle"  >
                    <Col span={18} offset={3}>
                      <img src="https://o48qtc2r4.qnssl.com/image40.jpg" className="carousel-img"/>
                    </Col>
                  </Row>
                  <Row type="flex" justify="space-around" align="middle"  >
                    <Col span={18} offset={3}>
                      <img src="https://o48qtc2r4.qnssl.com/image37.jpg" className="carousel-img"/>
                    </Col>
                  </Row>
                </Carousel>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

PhotoContainer.propTypes = {};

PhotoContainer.defaultProps = {};

export default PhotoContainer;
