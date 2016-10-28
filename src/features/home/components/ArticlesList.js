import React, { Component, PropTypes } from "react";
import { Row, Col, Card, Timeline, Tag } from "antd";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import randomColor from "randomcolor";

class ArticlesList extends Component {
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
      <div>{this.renderLink(post)}{this.renderTags(post.tag_list)}</div>
      } style={{padding: '10px'}}>
        <ReactMarkdown className="markdown-body" source={post.content}>
        </ReactMarkdown>
      </Card>
    </Timeline.Item>
  );

  render () {
    const { posts } = this.props;
    return (
      <Row className="content-block article-list">
        <Col className="p-30">
          <Timeline>
            {
              posts.map((post)=> (this.renderPost(post)))
            }
          </Timeline>
        </Col>
      </Row>
    );
  }
}

ArticlesList.propTypes = {
  posts: PropTypes.array.isRequired
};

ArticlesList.defaultProps = {
  posts: []
};

export default ArticlesList;
