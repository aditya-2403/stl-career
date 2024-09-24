import React from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const { Title, Text, Paragraph } = Typography;

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const onFinish = async (values) => {
    try {
      // Send POST request to the login API
      const response = await fetch('http://localhost:5000/api/applicant/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      const result = await response.json();

      if (result.status_code === 200 && result.success) {  
        localStorage.setItem('token', result.response.token);

        message.success(result.message);
        navigate('/dashboard');
      } else {
 
        message.error(result.message || 'Login failed, please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      message.error('An error occurred during login.');
    }
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
          <Title level={3} className="login-title">Welcome Back!</Title>
          <p className="text-center">Enter Your Details to Login</p>
          <Form
            name="login_form"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please enter your username!' },
                { type: 'text', message: 'Please enter a valid username!' }
              ]}
            >
              <Input
                placeholder="Enter Your Username"
                size="large"
                className="input-field"
                prefix={<UserOutlined className='input-icon' />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="input-icon" />}
                placeholder="Enter Your Password"
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

          <Text className="text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default Login;
