import React from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from '../Sidebar/Sidebar';

const { Header, Content, Footer, Sider } = Layout;

const barData = [
  { name: 'Job 1', applications: 100 },
  { name: 'Job 2', applications: 75 },
  { name: 'Job 3', applications: 200 },
  { name: 'Job 4', applications: 50 },
];

const lineData = [
  { month: 'Jan', applications: 40 },
  { month: 'Feb', applications: 60 },
  { month: 'Mar', applications: 30 },
  { month: 'Apr', applications: 100 },
  { month: 'May', applications: 80 },
];

const pieData = [
  { name: 'Software Engineer', value: 400 },
  { name: 'Data Analyst', value: 300 },
  { name: 'Product Manager', value: 300 },
  { name: 'Designer', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
  return (
    <Layout>
      
    <Sidebar/>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <h3 style={{ textAlign: 'center' }}>Admin Dashboard</h3>
        </Header>
        <Content style={{ margin: '16px' }}>
          <Row gutter={16}>
            <Col span={6}>
              <Card title="No. of Job Openings" bordered={false}>42</Card>
            </Col>
            <Col span={6}>
              <Card title="Total Applications Received" bordered={false}>320</Card>
            </Col>
            <Col span={6}>
              <Card title="Active Job Postings" bordered={false}>12</Card>
            </Col>
            <Col span={6}>
              <Card title="Positions Filled" bordered={false}>5</Card>
            </Col>
          </Row>

     
          <div style={{ marginTop: '24px' }}>
            <Row gutter={16}>
              <Col span={12}>
                <Card title="Applications per Job Posting" bordered={false}>
               
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="applications" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Monthly Applications Overview" bordered={false}>
              
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="applications" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '24px' }}>
              <Col span={24}>
                <Card title="Top Job Roles by Applications" bordered={false}>
               
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Job Application Dashboard ©2024</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
