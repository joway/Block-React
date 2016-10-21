import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { rest } from '../../../common';
import { Row, Col, Card, Tag, Input, Button, Icon } from 'antd';
import CommentPanel from '../../../components/comment/components/CommentPanel'
import AnalysisPie from '../../../components/AnalysisPie';
import Article from '../../../components/Article'
import '../Post.css'

const { actions } = rest;

@connect((state) => ({}))
class PostContainer extends React.Component {
  constructor (props) {
    super(props);
    const { dispatch } = this.props;
  }
  

  render () {
    const markdown = `
Changes are automatically rendered as you type.

* Follows the [CommonMark](http://commonmark.org/) spec
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!

## HTML block below
> How about some code?
xxxxx
    `;

    const article = {
      id: 1,
      author: 'Joway',
      tags: ['Django', 'Python'],
      catalog: '编程',
      title: '我是标题 -- Title',
      content: markdown,
      created_at: '2016-10-10',
      updated_at: '2016-10-19'
    };

    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block m-b-3">
            <Article article={article}/>
            <Row>
              <span className="to-left"><Link to={`/post/${ article.id - 1 }`}>上一页</Link></span>
              <span className="to-right"><Link to={`/post/${ article.id + 1 }`}>下一页</Link></span>
            </Row>
          </Card>

          <Card className="content-block p-30">
            <CommentPanel />
          </Card>
        </Col>
        <Col span={6} offset={1}>
          <AnalysisPie />
        </Col>
      </Row>
    )
  }
}

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

export default PostContainer;
