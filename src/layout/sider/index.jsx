import React from "react";
import { Layout } from "antd";

import "./Sider.css";
import Menu from "../menu";

const AntdSider = Layout.Sider;

const Sider = ({ collapsed }) => {
  return (
    <AntdSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme='light'
      className='sider'
    >
    <div className="logo" />      
    <Menu />
    </AntdSider>
  );
}

export default Sider;