import React from 'react';
import { Form, Input, Button, Typography, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

const { Title, Text, Paragraph } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const validatePassword = (_, value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    if (value && passwordRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject('Passwords do not match!');
    },
  });

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
                  rules={[
                    { required: true, message: 'Please enter your first name!' },
                    { pattern: /^[A-Za-z]+$/, message: 'First name must contain only letters' },
                    { max: 50, message: 'First name cannot exceed 50 characters' }
                  ]}
                >
                  <Input placeholder="First Name" size="large" className="input-field" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="last_name"
                  rules={[
                    { required: true, message: 'Please enter your last name!' },
                    { pattern: /^[A-Za-z]+$/, message: 'Last name must contain only letters' },
                    { max: 50, message: 'Last name cannot exceed 50 characters' }
                  ]}
                >
                  <Input placeholder="Last Name" size="large" className="input-field" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input placeholder="Email" size="large" className="input-field" />
                </Form.Item>
              </Col>


              <Col span={12}>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: 'Please enter your phone number!' },
                    { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits' }
                  ]}
                >
                  <Input placeholder="Phone No." size="large" className="input-field" />
                </Form.Item>
              </Col>
            </Row>


            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please enter your password!' },
                    { validator: validatePassword }
                  ]}
                >
                  <Input.Password placeholder="Password" size="large" className="input-field" />
                </Form.Item>
              </Col>


              <Col span={12}>
                <Form.Item
                  name="confirm_password"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Please confirm your password!' },
                    validateConfirmPassword
                  ]}
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
