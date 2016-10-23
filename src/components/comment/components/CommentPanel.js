import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag, Input, Button } from 'antd';
import { Link } from 'react-router';
import CommentList from './CommentList';

class CommentPanel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleChange = ()=>(
    this.setState({ content: document.getElementById('comment-textarea').value })
  );

  render () {
    const { comments } = this.props;
    return (
      <Row>
        <CommentList comments={comments}/>
        <h3 className="m-10">支持Markdown格式</h3>
        <Input type="textarea" rows={4} placeholder="请输入您的评论" className="m-b-30" id="comment-textarea"
               onChange={this.handleChange}/>
        <Button type="primary" size="large" className="to-right"
                onClick={() => (this.props.createComment(this.state.content))}>发送</Button>
      </Row>
    );
  }
}

CommentPanel.propTypes = {
  comments: PropTypes.array.isRequired,
  createComment: PropTypes.func
};

export default CommentPanel;