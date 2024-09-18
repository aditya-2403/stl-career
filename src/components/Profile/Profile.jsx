import React, { useState } from "react";
import { Form, Input, Button, Layout, Typography } from "antd";
import "./Profile.css";
import CommonHeaders from "../Header/CommonHeaders";

const { Content } = Layout;
const { Title } = Typography;

const Profile = () => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    // You can add logic to handle form submission (API call)
  };

  return (
    <>
      <CommonHeaders />
      <Content
        className="profile-content"
        style={{ padding: "20px 50px", marginTop: 64 }}
      >
        <Title level={3}>Update Profile</Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
          }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Title level={4}>Change Password</Title>

          <Form.Item
            name="currentPassword"
            label="Current Password"
            rules={[
              { required: true, message: "Please enter your current password" },
            ]}
          >
            <Input.Password placeholder="Enter current password" />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[
              { required: true, message: "Please enter your new password" },
            ]}
          >
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};

export default Profile;
