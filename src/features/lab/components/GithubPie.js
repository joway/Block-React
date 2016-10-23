import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag, Icon } from 'antd';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import randomColor from 'randomcolor';

class GithubPie extends Component {
  render () {
    const { repos } = this.props;
    return (
      <Row type="flex" justify="space-around" align="middle">
        {
          repos.map((repo) => (
            <Col span={8} key={repo.id}>
              <Card title={
                <div><a href={repo.html_url} target="_blank" style={{color: '#333', fontWeight: '800'}}>
                <span>{repo.name}</span></a><span className="to-right">{repo.created_at}</span></div>} className="m-30">
                <p className="m-b-30">{repo.description}</p>
                <div className="to-right m-b-10">
                  {repo.language && <Tag color={randomColor({luminosity: 'light'})}>{repo.language}</Tag>}
                  <Tag color={randomColor({luminosity: 'light'})}>
                    <Icon type="star" className="m-r-5"/>{repo.stargazers_count}</Tag>
                </div>
              </Card>
            </Col>
          ))
        }
      </Row>
    );
  }
}

GithubPie.propTypes = {
  repos: PropTypes.array.isRequired
};

GithubPie.defaultProps = {
  repos: []
};

export default GithubPie;
