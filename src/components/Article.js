import React, { Component, PropTypes } from 'react';
import { Row, Col, Icon, Tag } from 'antd';
import ReactMarkdown from 'react-markdown';
import randomColor from 'randomcolor';
import './Article.css'

export default class Post extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  renderTags = (tags) => (
    <div className="m-b-30">
      <Icon type="tags" className="tag-icon"/>
      {
        tags.map((tag) => (
          <Tag color={randomColor({luminosity: 'light'})} key={tag}>{tag}</Tag>
        ))
      }
    </div>
  );

  render () {
    const { article } = this.props;
    return (
      <artile>
        <div className="m-b-10">
          <h1 className="post-title">{article.title}</h1>
          <span className="to-right">{article.created_at}</span>
        </div>
        {article.tags.length > 0 && this.renderTags(article.tags)}
        <ReactMarkdown className="markdown-body m-b-30" source={article.content}/>
      </artile>
    );
  }
}