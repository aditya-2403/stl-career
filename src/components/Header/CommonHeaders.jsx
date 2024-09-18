import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
import {
  AppstoreOutlined,
  MoneyCollectOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const CommonHeaders = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };
  return (
    <Header style={{ backgroundColor: "#001529" }}>
      <div className="logo">Dashboard</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<AppstoreOutlined />}
          onClick={() => navigate("/dashboard")}
        >
          Home
        </Menu.Item>
        <Menu.Item key="2">Open Roles</Menu.Item>
        <Menu.Item key="3">My Applications</Menu.Item>
        <Menu.Item key="4" onClick={() => navigate("/profile")}>
          Profile
        </Menu.Item>
        <Menu.Item
          key="5"
          style={{ marginLeft: "auto" }}
          onClick={handleLogout}
          icon={<LogoutOutlined />}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default CommonHeaders;
