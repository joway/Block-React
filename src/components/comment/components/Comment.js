import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag } from 'antd';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

class Comment extends Component {
  render () {
    const { comment } = this.props;
    return (
      <Row className="content-block" className="comment-box">
        <Col span={2}>
          <img className="round" src={comment.author.avatar} width="32"/>
        </Col>
        <Col span={22}>
          <h3>
            <span className="comment-author">{comment.author.username}</span>
            {comment.author.is_staff && <Tag color="blue" className="comment-role">Mod</Tag>}
          </h3>
          <ReactMarkdown source={comment.content}>
          </ReactMarkdown>
        </Col>
      </Row>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
