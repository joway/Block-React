import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag, Input, Button } from 'antd';
import { Link } from 'react-router';
import { async } from 'redux-api';
import { rest } from '../../../common';
import CommentList from './CommentList';
import { infoDialog } from "../../../utils/dialog";
import { COMMENT_TYPE_ARTICLE } from "../../../utils/constants";
import '../Comment.css'
const { actions } = rest;

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

  createComment = (content) => {
    const { dispatch, commentType, commentTo, callback } = this.props;
    if (content.length < 3 ) {
      infoDialog('回复内容不允许少于3个字');
      return;
    }
    const data = { comment_to: commentTo, type: commentType, content: content }
    async(dispatch,
      (cb) => actions.comment({}, {
        body: JSON.stringify(data)
      }, cb)).then((data) => {
        infoDialog(data.detail);
        if (callback) {
          callback();
        }
      }
    );
  };

  render () {
    const { comments } = this.props;
    return (
      <Row>
        <CommentList comments={comments}/>
        <h3 className="m-10">支持Markdown格式</h3>
        <Input type="textarea" rows={4} placeholder="请输入您的评论" className="m-b-30" id="comment-textarea"
               onChange={this.handleChange}/>
        <Button type="primary" size="large" className="to-right"
                onClick={() => (this.createComment(this.state.content))}>发送</Button>
      </Row>
    );
  }
}

CommentPanel.propTypes = {
  commentTo: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  callback: PropTypes.func,
  commentType: PropTypes.number
};


CommentPanel.defaultProps = {
  commentType: COMMENT_TYPE_ARTICLE
};
export default CommentPanel;