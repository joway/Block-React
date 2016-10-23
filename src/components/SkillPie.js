import React, { Component, PropTypes } from 'react';
import { Row, Col, Card } from 'antd';
import { Radar } from 'react-chartjs-2';

export default class SkillPie extends Component {
  static propTypes = {};

  render () {
    const languages = {
      labels: ['C', 'Java', 'Swift', 'Ruby', 'JavaScript', 'Html && CSS', 'Python'],
      datasets: [
        {
          label: 'Languages Evaluation ( 100 )',
          backgroundColor: 'rgba(236,179,255,0.2)',
          borderColor: 'rgba(51,51,0,1)',
          pointBackgroundColor: '#01BAD2',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [30, 50, 20, 10, 40, 40, 80]
        }
      ]
    };

    const skills = {
      labels: ['Redis', 'Linux', 'Django', 'ElastcSearch', 'SSH', 'Docker', 'React', 'Hadoop'],
      datasets: [
        {
          label: 'Skills Evaluation ( 100 )',
          backgroundColor: 'rgba(102,255,102,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: '#01BAD2',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [30, 50, 80, 40, 70, 70, 40, 30]
        }
      ]
    };
    return (
      <Card className="content-block content-center">
        <Row className="m-b-10">
          <Radar data={languages}/>
        </Row>
        <Row className="m-b-10">
          <Radar data={skills}/>
        </Row>
      </Card>
    );
  }
}