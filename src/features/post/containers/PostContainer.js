import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { async } from "redux-api";
import rest from "../../../common/rest";
import { Row, Col, Card, Tag, Input, Button, Icon } from "antd";
import CommentPanel from "../../../components/comment/CommentPanel";
import Loading from "../../../components/decorator/Loading";
import AnalysisPie from "../../../components/analysis/AnalysisPie";
import Article from "../../../components/article/Article";
import "../Post.css";

const { actions } = rest;

@connect((state) => ({
  article: state.article
}))
class PostContainer extends React.Component {
  syncArticle = () => {
    const { dispatch } = this.props;
    dispatch(actions.article({ id: this.props.params.id }));
  };

  componentWillMount = () => {
    this.syncArticle();
  };

  renderPaging = (article) => {
    const curID = article.id;
    return (
      <Row>
        <span className="to-left"><Link to={`/post/${ curID - 1 || 1 }`}>上一页</Link></span>
        <span className="to-right"><Link to={`/post/${ curID + 1 }`}>下一页</Link></span>
      </Row>
    );
  };

  render () {

    const { article, dispatch } = this.props;

    if (article.loading) {
      return <Loading />
    }

    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block m-b-3">
            <Article article={article.data}/>
            {this.renderPaging(article.data)}
          </Card>

          <Card className="content-block p-30">
            { article.data.comments != undefined &&
            <CommentPanel comments={article.data.comments}
                          dispatch={this.props.dispatch}
                          commentTo={article.data.id}
                          callback={this.syncArticle}/>}
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <AnalysisPie />
        </Col>
      </Row>
    )
  }
}

export default PostContainer;
