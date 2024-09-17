import React from 'react';
import { Form, Input, Button, Typography, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

const { Title, Text, Paragraph } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <Title className="left-title">Join Our Career Portal</Title>
        <Paragraph className="left-paragraph">
          Sign up to discover new opportunities, connect with top employers, and grow your career with us.
        </Paragraph>
      </div>

      <div className="login-right">
        <Card className="login-card">
          <Title level={3} className="login-title">Create Your Account</Title>
          <p className="text-center">Fill in your details below</p>
          <Form
            name="register_form"
            onFinish={onFinish}
            layout="vertical"
          >

            <Row gutter={15}>
              <Col span={12}>
                <Form.Item
                  name="first_name"
                  rules={[{ required: true, message: 'Please enter your first name!' }]}
                >
                  <Input placeholder="First Name" size="large" className="input-field" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="last_name"
                  rules={[{ required: true, message: 'Please enter your last name!' }]}
                >
                  <Input placeholder="Last Name" size="large" className="input-field" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                  <Input placeholder="Email" size="large" className="input-field" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: 'Please enter your phone number!' }]}
                >
                  <Input placeholder="Phone No." size="large" className="input-field" />
                </Form.Item>
              </Col>
            </Row>


            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                  <Input.Password placeholder="Password" size="large" className="input-field" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="confirm_password"
                  rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                  <Input.Password placeholder="Confirm Password" size="large" className="input-field" />
                </Form.Item>
              </Col>
            </Row>


            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large" className="login-button">
                Register
              </Button>
            </Form.Item>
          </Form>


          <Text className="text-center">
            Already have an account? <Link to="/">Log in here</Link>
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default Register;
