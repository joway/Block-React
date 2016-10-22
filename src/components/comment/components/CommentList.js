import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag } from 'antd';
import { Link } from 'react-router';
import Comment from './Comment';
import '../Comment.css';


class CommentList extends Component {
  render () {
    const { comments } = this.props;
    return (
      <Row className="content-block">
        <Col>
          {
            comments.map((comment) => (<Comment comment={comment} key={comment.id}/>))
          }
        </Col>
      </Row>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;