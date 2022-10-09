import { Layout } from "antd";
import CFooter from "components/Footer";
import CHeader from "components/Header";
import React from "react";

const Airbnb = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      <CHeader />
      <Layout className="px-[50px] py-[30px]">
        <Content className="h-screen">{children}</Content>
      </Layout>
      <CFooter />
    </Layout>
  );
};

export default Airbnb;
