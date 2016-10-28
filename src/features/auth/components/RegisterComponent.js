import React, { Component, PropTypes } from "react";
import { Row, Col, Card, Input, Button, Form } from "antd";
const createForm = Form.create;
const FormItem = Form.Item;

class RegisterComponent extends Component {
  handleReset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { register } = this.props;
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        console.log('Submit!!!');
        console.log(values);
        register(values.email, values.password);
      }
    });
  };


  checkPassword = (rule, value, callback) => {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePassword'], { force: true });
    }
    callback();
  };

  reCheckPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('password')) {
      callback('The two passwords you enter are inconsistent!');
    } else {
      callback();
    }
  };

  render () {
    const { getFieldDecorator, getFieldError, isFieldValidating } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form horizontal>
        <FormItem
          {...formItemLayout}
          label="Username"
          hasFeedback
          help={isFieldValidating('username') ? 'validating...' : (getFieldError('username') || []).join(', ')}
        >
          {getFieldDecorator('username', {
            rules: [
              { required: true, min: 5, message: 'Username for at least 5 characters' },
            ]
          })(
            <Input placeholder="Input your username"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Email"
          hasFeedback
        >
          {getFieldDecorator('email', {
            validate: [{
              rules: [
                { required: true },
              ],
              trigger: 'onBlur',
            }, {
              rules: [
                { type: 'email', message: 'Please input the correct email' },
              ],
              trigger: ['onBlur', 'onChange'],
            }],
          })(
            <Input type="email" placeholder="Input your email"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [
              { required: true, whitespace: true, message: 'Please enter your password' },
              { validator: this.checkPassword },
            ],
          })(
            <Input type="password" autoComplete="off" placeholder="Input your password"
                   onContextMenu={false} onPaste={false} onCopy={false} onCut={false}
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Confirm password"
          hasFeedback
        >
          {getFieldDecorator('rePassword', {
            rules: [{
              required: true,
              whitespace: true,
              message: 'Please confirm your password',
            }, {
              validator: this.reCheckPassword,
            }],
          })(
            <Input type="password" autoComplete="off" placeholder="Input your username again"
                   onContextMenu={false} onPaste={false} onCopy={false} onCut={false}
            />
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" onClick={this.handleSubmit} className="m-10">提交</Button>
          <Button type="ghost" onClick={this.handleReset} className="m-10">重置</Button>
        </FormItem>
      </Form>
    );
  }
}
RegisterComponent.propTypes = {
  register: PropTypes.func.isRequired
};
RegisterComponent = createForm()(RegisterComponent);

export default RegisterComponent;