import { Layout } from "antd";
import CFooter from "components/Footer";
import CHeader from "components/Header";
import React from "react";

const Airbnb = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout className="!bg-white">
      <CHeader />
      <Layout className="!bg-white">
        <Content>{children}</Content>
      </Layout>
      <CFooter />
    </Layout>
  );
};

export default Airbnb;
