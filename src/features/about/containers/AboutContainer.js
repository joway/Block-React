import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { rest } from '../../../common';
import { Row, Col, Card } from 'antd';
import Article from '../../../components/Article';
import CommentPanel from '../../../components/comment/components/CommentPanel'

import '../About.css'

const { actions } = rest;

@connect((state) => ({}))
class AboutContainer extends React.Component {
  constructor (props) {
    super(props);
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
      tags: [],
      catalog: 'About',
      title: 'About',
      content: markdown,
      created_at: '2016-10-10',
      updated_at: '2016-10-19'
    };
    return (
      <Row>
        <Col span={14} offset={5}>
          <Card className="content-block">
            <Article article={article}/>
          </Card>

          <Card className="content-block">
            <CommentPanel />
          </Card>
        </Col>
      </Row>
    )
  }
}

AboutContainer.propTypes = {};

AboutContainer.defaultProps = {};

export default AboutContainer;
