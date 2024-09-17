import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="register-container">
      <Title level={2} className="register-title">Register for an Account</Title>
      <Form
        name="register_form"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Username" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
