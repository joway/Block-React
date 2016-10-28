import React from "react";
import { bindActionCreators } from "redux";
import { async } from "redux-api";
import { connect } from "react-redux";
import { Row, Col, Card, Button, Steps } from "antd";
import rest from "../../../common/rest";
import Wrapper from "../../../components/decorator/Wrapper";
import { infoDialog } from "../../../utils/dialog";

const { actions } = rest;


@connect((state) => ({}))
class ActivateContainer extends React.Component {
  constructor (props) {
    super(props);
    const redirect = this.props.location.query.redirect || '/';
  }

  activate = (captcha) => {
    const { dispatch } = this.props;
    async(dispatch,
      (cb) => actions.authActivate({}, {
        body: JSON.stringify({ captcha })
      }, cb)).then((data) => {
        infoDialog(data.detail);
      }
    );
  };

  render () {
    const { confirm, email } = this.props.location.query;
    return (
      <Wrapper>
        <Row type="flex" justify="space-around" align="middle">
          <Steps current={1} className="m-b-30">
            <Steps.Step title="注册"/>
            <Steps.Step title="激活"/>
            <Steps.Step title="登陆"/>
          </Steps>
          <Col className="content-center m-30">
            <h2>请确认激活您的帐号 : <span style={{color: '#333'}} className="m-l-10"> {email} </span></h2>
            <Button type="primary" className="m-30" onClick={() => (this.activate(confirm))}>
              确认
            </Button>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default ActivateContainer;
