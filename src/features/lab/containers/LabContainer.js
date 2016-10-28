import React from "react";
import { connect } from "react-redux";
import rest from "../../../common/rest";
import { Row, Col, Card, Tag } from "antd";
import Loading from "../../../components/decorator/Loading";
import GithubPie from "../components/GithubPie";
import "../Lab.css";

const { actions } = rest;

@connect((state) => ({
  reposState: state.githubRepos
}))
class LabContainer extends React.Component {

  syncGithubRepos = () => {
    const { dispatch } = this.props;
    dispatch(actions.githubRepos({ sort: 'updated' }));
  };

  componentWillMount = () => {
    this.syncGithubRepos();
  };

  render () {
    const { reposState }  = this.props;

    if (reposState.loading) {
      return <Loading />
    }

    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={20} offset={2}>
          <Card className="content-block">
            <GithubPie repos={ reposState.data }/>
          </Card>
        </Col>
      </Row>
    )
  }
}

LabContainer.propTypes = {};

LabContainer.defaultProps = {};

export default LabContainer;
