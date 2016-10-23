import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { rest } from '../../../common';
import { Row, Col, Card, Tag, Input, Button, Icon } from 'antd';
import CommentPanel from '../../../components/comment/components/CommentPanel'
import Loading from '../../../components/Loading';
import AnalysisPie from '../../../components/AnalysisPie';
import Article from '../../../components/Article'
import '../Post.css'
import { COMMENT_TYPE_ARTICLE } from "../../../utils/constants";

const { actions } = rest;

@connect((state) => ({
  article: state.article
}))
class PostContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(actions.article({ id: props.params.id }));
  }


  createComment = (content) => {
    const { dispatch } = this.props;
    const data = { comment_to: this.props.params.id, type: COMMENT_TYPE_ARTICLE, content: content }
    dispatch(actions.comment({}, {body: JSON.stringify(data)}));
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

    const { article } = this.props;

    if (article.loading) {
      return <Loading />
    }

    console.log(article);
    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block m-b-3">
            <Article article={article.data}/>
            {this.renderPaging(article.data)}
          </Card>

          <Card className="content-block p-30">
            { article.data.comments != undefined && <CommentPanel comments={article.data.comments} createComment={this.createComment}/> }
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
