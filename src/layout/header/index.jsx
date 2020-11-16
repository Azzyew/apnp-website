import React from "react";
import { Dropdown, Layout } from "antd";
import "./Header.css";

//Icons
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const AntdHeader = Layout.Header;

const Header = ({ siderCollapse, setSiderCollapse }) => {

  return (
    <AntdHeader className="header layout-background" style={{ padding: 0 }}>
      {React.createElement(siderCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setSiderCollapse(!siderCollapse),
      })}
      <div className='header__right-menu'>
        <span>
          <Dropdown
            placement="bottomCenter"
            arrow
          >
          </Dropdown>
        </span>
      </div>
    </AntdHeader>
  );
}

export default Header;