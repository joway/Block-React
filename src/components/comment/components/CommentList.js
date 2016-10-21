import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag } from 'antd';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import randomColor from 'randomcolor';
import Comment from './Comment';
import '../Comment.css';


export default class CommentList extends Component {
  static propTypes = {};

  render () {
    const markdown = `
Changes are automatically rendered as you type.
Changes are automatically rendered as you type.
Changes are automatically rendered as you type.
Changes are automatically rendered as you type.
Changes are automatically rendered as you type.

* If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!
> How about some code?
xxxxx
    `;

    const postList = [
      {
        id: 1,
        author: 'Joway',
        avatar: 'https://a.disquscdn.com/uploads/users/1668/8837/avatar92.jpg',
        post_id: 1,
        content: markdown,
        created_at: '2016-10-10',
        role: 'admin'
      },
      {
        id: 2,
        author: 'Joway',
        avatar: 'https://a.disquscdn.com/uploads/users/1668/8837/avatar92.jpg',
        post_id: 1,
        content: markdown,
        created_at: '2016-10-10',
        role: 'user'
      }
    ];
    return (
      <Row className="content-block">
        <Col>
          {
            postList.map((comment) => (<Comment comment={comment} key={comment.id} />))
          }
        </Col>
      </Row>
    );
  }
}