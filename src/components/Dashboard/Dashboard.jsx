import React from "react";
import { Layout, Menu, Card, Row, Col, Typography, Button } from "antd";
import Profile from "../Profile/Profile";
import { MoneyCollectOutlined } from "@ant-design/icons";
import "./Dashboard.css";
import CommonHeaders from "../Header/CommonHeaders";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const roles = [
  {
    title: "Software Engineer",
    description:
      "Develop and maintain web applications. Collaborate with cross-functional teams.",
    payscale: "$80,000 - $120,000",
  },
  {
    title: "Product Manager",
    description: "Manage the development and strategy of product lifecycle.",
    payscale: "$90,000 - $130,000",
  },
  {
    title: "UI/UX Designer",
    description:
      "Create user-friendly designs for web and mobile applications.",
    payscale: "$70,000 - $100,000",
  },
  {
    title: "Full Stack Developer",
    description:
      "Create full stack web applications handling frontend, backend, and database.",
    payscale: "$70,000 - $100,000",
  },
  {
    title: "Data Scientist",
    description:
      "Analyze complex data sets to inform business decisions. Build predictive models",
    payscale: "$90,000 - $140,000",
  },
  {
    title: "Marketing Manager",
    description:
      "Develop and implement marketing strategies to drive brand awareness and growth.",
    payscale: "$80,000 - $120,000",
  },
  {
    title: "DevOps Engineer",
    description:
      "Streamline development and operations processes. Manage deployment pipelines",
    payscale: "$85,000 - $125,000",
  },
  {
    title: "Business Analyst",
    description:
      "Identify business needs and provide data-driven solutions. Analyze processes and recommend..",
    payscale: "$70,000 - $110,000",
  },
];

const Dashboard = () => {
  return (
    <Layout className="dashboard-layout">
      <CommonHeaders />
      <Content
        className="dashboard-content"
        style={{ padding: "20px 50px", marginTop: 64 }}
      >
        <Title>Jobs for you</Title>
        <Row gutter={[16, 16]}>
          {roles.map((role, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                title={role.title}
                bordered={false}
                extra={<Button type="primary">Apply</Button>}
                style={{ width: "100%" }}
              >
                <Paragraph>{role.description}</Paragraph>
                <Paragraph>
                  <MoneyCollectOutlined /> Payscale: {role.payscale}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "#fcfcfc",
        }}
      >
        Career Portal ©2024 Created by Aditya
      </Footer>
    </Layout>
  );
};

export default Dashboard;
