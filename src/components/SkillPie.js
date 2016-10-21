import React, { Component, PropTypes } from 'react';
import { Row, Col, Card } from 'antd';
import { Radar } from 'react-chartjs-2';

export default class SkillPie extends Component {
  static propTypes = {};

  render () {
    const data = {
      labels: ['Python', 'C', 'Java', 'Swift', 'Ruby', 'JavaScript', 'Html && CSS'],
      datasets: [
        {
          label: 'Skills Evaluation',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: '#01BAD2',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [90, 30, 50, 20, 10, 40, 40]
        }
      ]
    };
    return (
      <Card style={{textAlign: 'center'}} className="content-block">
        <Row>
          <Col span={24}>
            <Radar data={data} />
          </Col>
        </Row>
      </Card>
    );
  }
}