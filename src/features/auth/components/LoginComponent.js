import React, { Component, PropTypes } from "react";
import { Row, Col, Card, Input, Button, Form } from "antd";
const createForm = Form.create;
const FormItem = Form.Item;

class LoginComponent extends Component {

  handleSubmit = (e)=> {
    const { login } = this.props;
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      }
      login(values.email, values.password);
    });
    e.preventDefault();
  };

  render () {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    return (
      <Form horizontal>
        <FormItem {...formItemLayout} label="Email" hasFeedback>
          {
            getFieldDecorator('email', {
              validate: [{
                rules: [
                  { required: true }
                ],
                trigger: 'onBlur'
              }, {
                rules: [
                  { type: 'email', message: 'Please input the correct email' },
                ],
                trigger: ['onBlur', 'onChange']
              }]
            })
            (<Input type="email" placeholder="email"/>)
          }
        </FormItem>

        <FormItem {...formItemLayout} label="Password" hasFeedback>
          {
            getFieldDecorator('password', {
              validate: [{
                rules: [
                  { required: true }
                ],
                trigger: 'onBlur'
              }]
            })(
              <Input type="password" placeholder="password" autoComplete="off"/>)
          }
        </FormItem>
        <FormItem wrapperCol={{ span: 4, offset: 16 }}>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </FormItem>
      </Form>
    );
  }
}
LoginComponent.propTypes = {
  login: PropTypes.func.isRequired
};

LoginComponent = createForm()(LoginComponent);

export default LoginComponent;