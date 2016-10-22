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

const { actions } = rest;

@connect((state) => ({
  article: state.article.data
}))
class PostContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(actions.article({ id: props.params.id }));
  }


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

    if (article.loding) {
      return <Loading />
    }
    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block m-b-3">
            <Article article={article}/>
            {this.renderPaging(article)}
          </Card>

          <Card className="content-block p-30">
            {article.comments != undefined && <CommentPanel comments={article.comments}/>}
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
