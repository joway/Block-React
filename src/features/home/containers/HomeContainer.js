import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col, Spin, Card, Pagination } from 'antd';
import ArticlesList from '../components/ArticlesList'
import Paging from '../../../components/Paging'
import Profile from '../../../components/Profile'
import AnalysisPie from '../../../components/AnalysisPie';
import SkillPie from '../../../components/SkillPie';
import Loading from '../../../components/Loading';

import '../home.css'

const { actions } = rest;

@connect((state) => ({
  pagination: state.articles
}))
class HomeContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;

    const page = this.props.location.query.page != undefined ? Number(this.props.location.query.page) : 1;
    this.state = {
      page
    };
    dispatch(actions.articles({ page }));
  }

  render () {
    const { pagination } = this.props;
    const { page } = this.state;
    if (pagination.loding) {
      return (
        <Loading />
      )
    }
    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block p-0">
            <ArticlesList posts={pagination.data.results}/>

            <Pagination showQuickJumper defaultCurrent={page} total={pagination.data.count}/>
          </Card>
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

export default HomeContainer;
