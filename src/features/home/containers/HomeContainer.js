import React from "react";
import { connect } from "react-redux";
import rest from "../../../common/rest";
import { Row, Col, Spin, Card, Pagination } from "antd";
import ArticlesList from "../components/ArticlesList";
import Profile from "../../../components/profile/Profile";
import AnalysisPie from "../../../components/analysis/AnalysisPie";
import SkillPie from "../../../components/profile/SkillPie";
import Loading from "../../../components/decorator/Loading";
import "../home.css";

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
    if (pagination.loading) {
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
