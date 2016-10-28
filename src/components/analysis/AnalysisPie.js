import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Line } from "react-chartjs-2";

export default class AnalysisPie extends Component {
  static propTypes = {};

  render () {
    const dailyData = {
      labels: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07'],
      datasets: [
        {
          label: 'Daily Page View',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(230,230,250,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(139,101,8,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    const weeklyData = {
      labels: ['第 1 周', '第 2 周', '第 3 周', '第 4 周', '第 5 周', '第 6 周', '第 7 周'],
      datasets: [
        {
          label: 'Weekly Page View',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,236,139,0.4)',
          borderColor: 'rgba(135,206,250,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(139,101,8,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <Card style={{textAlign: 'center'}} className="content-block">
        <Row>
          <Col span={24}>
            <Line data={dailyData}/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Line data={weeklyData}/>
          </Col>
        </Row>
      </Card>
    );
  }
}