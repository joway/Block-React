import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag, Input, Button } from 'antd';
import { Link } from 'react-router';
import CommentList from './CommentList';

export default class CommentPanel extends Component {
  render () {
    return (
      <Row>
        <CommentList />
        <h3 className="m-10">支持Markdown格式</h3>
        <Input type="textarea" rows={4} placeholder="请输入您的评论" className="m-b-30"/>
        <Button type="primary" size="large" className="to-right">发送</Button>
      </Row>
    );
  }
}