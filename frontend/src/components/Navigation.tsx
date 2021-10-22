import React, { useContext } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CurrentNodeContext } from "../App";
import * as api from "../lib/api";
import MenuItem from "antd/lib/menu/MenuItem";

const Navigation: React.FC = () => {
  const [connected, setConnected] = useContext(CurrentNodeContext);

  const disconnect = () => {
    api.clearToken();
    setConnected(false);
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item key="app" icon={<HomeOutlined />}>
        <Link to="/">LND guide</Link>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        {!connected ? (
          <Link to="/connect">Connect to LND</Link>
        ) : (
          <MenuItem onClick={disconnect}>Disconnect</MenuItem>
        )}
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
