import React, { useState } from "react";
import { Layout } from "antd";
import "./Page.css";
import Sider from "../sider";
import Header from "../header";
import PageHeader from "antd/lib/page-header";

const { Content } = Layout;

const Page = ({ children, raw, pageHeader = {} }) => {

  const [siderCollapse, setSiderCollapse] = useState(true);

  return (
    <Layout className={`layout${raw ? '__raw' : ''}`}>
      {raw && (
        children
      )}
      {!raw && (
        <>
          <Sider
            collapsed={siderCollapse}
          />
          <Layout>
            <Header
              siderCollapse={siderCollapse}
              setSiderCollapse={setSiderCollapse}
            />
            <Content
              className={`layout-background`}
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {pageHeader.title && (
                <PageHeader
                  title={pageHeader.title}
                  {...pageHeader}
                />
              )}
              {children}
            </Content>
          </Layout>

        </>
      )}

    </Layout>
  );
}

export default Page;