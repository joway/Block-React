import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col, Card, Spin } from 'antd';
import Article from '../../../components/Article';
import Loading from '../../../components/Loading';
import CommentPanel from '../../../components/comment/components/CommentPanel'

import '../About.css'

const { actions } = rest;

@connect((state) => ({
  article: state.articleAbout
}))
class AboutContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(actions.articleAbout());
  }

  render () {
    const { article } = this.props;

    if (article.loding) {
      return (
        <Loading />
      )
    }

    return (
      <Row>
        <Col span={14} offset={5}>
          <Card className="content-block">
            {article.loding && <Spin size="large"/>}
            <Article article={article.data}/>
          </Card>

          <Card className="content-block">
            {article.data.comments != undefined && <CommentPanel comments={article.data.comments}/>}
          </Card>
        </Col>
      </Row>
    )
  }
}

export default AboutContainer;
