import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="app" icon={<HomeOutlined />}>
        <Link to="/">LND guide</Link>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/connect">Connect to LND</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
