import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag } from 'antd';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import randomColor from 'randomcolor';

export default class ArticlesList extends Component {
  static propTypes = {};

  renderLink = (post) => (
    <Link to={`post/${post.id}`} className="article-card-title">{post.title}</Link>
  );

  renderTags = (tags) => (
    <span className="article-card-tags">
      {
        tags.map((tag) => (
          <Tag color={randomColor({luminosity: 'light'})} key={tag}>{tag}</Tag>
        ))
      }
    </span>
  );

  renderPost = (post) => (
    <Timeline.Item key={post.id}>
      <Card title={
      <div>{this.renderLink(post)}{this.renderTags(post.tags)}</div>
      } style={{padding: '10px'}}>
        <ReactMarkdown className="markdown-body" source={post.content}>
        </ReactMarkdown>
      </Card>
    </Timeline.Item>
  );

  render () {
    const markdown = `
Changes are automatically rendered as you type.

* Follows the [CommonMark](http://commonmark.org/) spec
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!
> How about some code?
xxxxx
    `;

    const postList = [
      {
        id: 1,
        author: 'Joway',
        tags: ['Django', 'Python'],
        catalog: '编程',
        title: '我是标题 -- Title',
        content: markdown,
        created_at: '2016-10-10',
        updated_at: '2016-10-19'
      },
      {
        id: 2,
        author: 'Joway',
        tags: ['Django', 'Python'],
        catalog: '编程',
        title: '我是标题 -- Title',
        content: markdown,
        created_at: '2016-10-10',
        updated_at: '2016-10-19'
      }
    ];
    return (
      <Row className="content-block article-list">
        <Col className="p-30">
          <Timeline>
            {
              postList.map((post)=> (this.renderPost(post)))
            }
          </Timeline>
        </Col>
      </Row>
    );
  }
}