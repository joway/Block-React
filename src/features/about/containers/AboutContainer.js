import React from "react";
import { connect } from "react-redux";
import rest from "../../../common/rest";
import { Row, Col, Card, Spin } from "antd";
import Article from "../../../components/article/Article";
import Loading from "../../../components/decorator/Loading";
import CommentPanel from "../../../components/comment/CommentPanel";

const { actions } = rest;

@connect((state) => ({
  article: state.articleAbout
}))
class AboutContainer extends React.Component {
  syncArticle = () => {
    const { dispatch } = this.props;
    dispatch(actions.articleAbout());
  };

  componentWillMount = () => {
    this.syncArticle();
  };


  render () {
    const { article } = this.props;

    if (article.loading) {
      return (
        <Loading />
      )
    }

    return (
      <Row>
        <Col span={14} offset={5}>
          <Card className="content-block">
            {article.loading && <Spin size="large"/>}
            <Article article={article.data}/>
          </Card>

          <Card className="content-block">
            {
              article.data.comments != undefined &&
              <CommentPanel comments={article.data.comments}
                            dispatch={this.props.dispatch}
                            commentTo={article.data.id}
                            callback={this.syncArticle}/>
            }
          </Card>
        </Col>
      </Row>
    )
  }
}

export default AboutContainer;
