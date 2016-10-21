import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col, Card, Timeline, Icon, Tag } from 'antd';
import ConnentList from '../../../components/comment/components/CommentList'
import randomColor from 'randomcolor';

import '../Bullshit.css'

const { actions } = rest;

@connect((state) => ({}))
class BullshitContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block">
            <Row>
              <Col span={18} offset={3}>
                <ConnentList />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

BullshitContainer.propTypes = {};

BullshitContainer.defaultProps = {};

export default BullshitContainer;
