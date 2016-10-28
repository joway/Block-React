import React from "react";
import { connect } from "react-redux";
import rest from "../../../common/rest";
import { Row, Col, Card, Timeline, Icon, Tag } from "antd";
import randomColor from "randomcolor";
import "../TimeLine.css";

const { actions } = rest;

@connect((state) => ({}))
class TimeLineContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const activities = [
      {
        id: 1,
        creator: 'Joway',
        activity_type: 'POST',
        activity_content: '发表了文章 <<今天天气很好>>',
        created_at: '2016-01-01',
      }, {
        id: 2,
        creator: 'Jack',
        activity_type: 'POST',
        activity_content: '在文章 << 今天天气真好 >> 下发表了评论',
        created_at: '2016-01-02',
      }
    ];
    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block">
            <Row>
              <Col span={18} offset={3}>
                <Timeline>
                  {
                    activities.map((activity) => (
                      <Timeline.Item color={randomColor({luminosity: 'light'})} key={activity.id}>
                        <span className="m-r-10">{activity.activity_content}</span>
                        <Tag color={randomColor({luminosity: 'light'})}
                             className="activity-author">{activity.creator}</Tag>
                        <Icon type="calendar"/>
                        {activity.created_at}
                      </Timeline.Item>
                    ))
                  }
                </Timeline>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

TimeLineContainer.propTypes = {};

TimeLineContainer.defaultProps = {};

export default TimeLineContainer;
