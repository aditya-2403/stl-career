import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';

const { Title, Text, Paragraph } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <Title className="left-title">Welcome to Our Career Portal</Title>
        <Paragraph className="left-paragraph">
          Discover exciting career opportunities, connect with professionals, 
          and take your career to the next level. Log in to explore our resources.
        </Paragraph>
      </div>

      <div className="login-right">
        <Card className="login-card">
          <Title level={3} className="login-title">Your Next Job Awaits</Title>
          <p className="text-center">Enter Your Details to Login</p>
          <Form
            name="login_form"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input
                prefix={<UserOutlined className="input-icon" />}
                placeholder="Username"
                size="large"
                className="input-field"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="input-icon" />}
                placeholder="Password"
                size="large"
                className="input-field"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large" className="login-button">
                Log in
              </Button>
            </Form.Item>
          </Form>

          {/* Add the register link below the form */}
          <Text className="text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default Login;
