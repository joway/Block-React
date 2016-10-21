import React, { Component, PropTypes } from 'react';
import { Row, Col, Card, Timeline, Tag } from 'antd';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import randomColor from 'randomcolor';

export default class GithubPie extends Component {
  static propTypes = {};

  render () {
    const projects = [
      {
        id: 1,
        title: 'Github 项目',
        description: '一个xxxxxx的项目',
        tags: ['Python', 'Django'],
        created_at: '2016-01-01'
      },
      {
        id: 2,
        title: 'Github 项目',
        description: '一个xxxxxx的项目',
        tags: ['Python', 'Django'],
        created_at: '2016-01-01'
      },
      {
        id: 3,
        title: 'Github 项目',
        description: '一个xxxxxx的项目',
        tags: ['Python', 'Django'],
        created_at: '2016-01-01'
      },
      {
        id: 4,
        title: 'Github 项目',
        description: '一个xxxxxx的项目',
        tags: ['Python', 'Django'],
        created_at: '2016-01-01'
      }
    ];
    return (
      <Row>
        {
          projects.map((project) => (
            <Col span={6} key={project.id}>
              <Card title={project.title} className="m-30">
                <p className="m-b-30">{project.description}</p>
                <div className="to-right m-b-10">
                  {
                    project.tags.map((tag) => (
                      <Tag color={randomColor({luminosity: 'light'})} key={tag}>{tag}</Tag>
                    ))
                  }
                </div>
              </Card>
            </Col>
          ))
        }
      </Row>
    );
  }
}