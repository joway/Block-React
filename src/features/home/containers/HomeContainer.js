import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col } from 'antd';
import ArticlesList from '../components/ArticlesList'
import Paging from '../components/Paging'
import Profile from '../../../components/Profile'
import AnalysisPie from '../../../components/AnalysisPie';
import SkillPie from '../../../components/SkillPie';

import '../home.css'

const { actions } = rest;

@connect((state) => ({
  v2ex: state.v2ex,
}))
class HomeContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(actions.v2ex());
  }

  render () {
    return (
      <Row>
          <Col span={15} offset={1}>
            <ArticlesList />
            <Paging />
          </Col>
          <Col span={6} offset={1}>
            <Row className="right-panel-box">
              <Profile />
            </Row>
            <Row className="right-panel-box">
              <SkillPie />
            </Row>
            <Row className="right-panel-box">
              <AnalysisPie />
            </Row>
          </Col>
      </Row>
    )
  }
}

HomeContainer.propTypes = {
  v2ex: PropTypes.array.isRequired,
};

HomeContainer.defaultProps = {
  v2ex: []
};

export default HomeContainer;
