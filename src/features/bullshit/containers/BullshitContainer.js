import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import { CommentList } from "../../../components/comment";
import "../Bullshit.css";

@connect((state) => ({}))
class BullshitContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <Row>
        <Col span={15} offset={1}>
          <Card className="content-block">
            <Row>
              <Col span={18} offset={3}>
                <CommentList />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

BullshitContainer.propTypes = {};

BullshitContainer.defaultProps = {};

export default BullshitContainer;
