import React from "react";
import { bindActionCreators } from "redux";
import { async } from "redux-api";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import RegisterComponent from "../components/RegisterComponent";
import rest from "../../../common/rest";
import { Wrapper } from "../../../components/decorator";
import { successDialog } from "../../../utils/dialog";


const { actions } = rest;

@connect((state) => ({}))
class RegisterContainer extends React.Component {
  constructor (props) {
    super(props);
    const redirect = this.props.location.query.redirect || '/';
  }

  register = (email, password) => {
    const { dispatch } = this.props;
    async(dispatch,
      (cb) => actions.authRegister({}, {
        body: JSON.stringify({ email, password })
      }, cb)).then((data) => {
        console.log(data);
        successDialog('注册成功');
      }
    );
  };

  render () {
    return (
      <Wrapper>
        <Row type="flex" justify="space-around" align="middle" className="m-30">
          <h1>注册用户</h1>
        </Row>
        <Row>
          <RegisterComponent register={this.register}/>
        </Row>
      </Wrapper>
    )
  }
}

export default RegisterContainer;
