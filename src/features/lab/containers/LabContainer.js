import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col, Card, Tag } from 'antd';
import GithubPie from '../components/GithubPie';
import '../Lab.css'

const { actions } = rest;

@connect((state) => ({}))
class LabContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Row>
        <Col span={20} offset={2}>
          <Card className="content-block">
            <GithubPie />
          </Card>
        </Col>
      </Row>
    )
  }
}

LabContainer.propTypes = {};

LabContainer.defaultProps = {};

export default LabContainer;
