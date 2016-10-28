import React, { Component, PropTypes } from "react";
import { Row, Col } from "antd";
import Comment from "./Comment";


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