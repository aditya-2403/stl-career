import React from 'react'
import { Layout, Menu } from 'antd';
import { DashboardOutlined, FileOutlined, BarChartOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider collapsible>
        <div className="logo">
            <img src={logo} style={{transform: 'translate(1.5rem, 0.5rem)'}} alt="" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />}>Job Openings</Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>Applications</Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>Reports</Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>Settings</Menu.Item>
        </Menu>
      </Sider>
  )
}

export default Sidebar