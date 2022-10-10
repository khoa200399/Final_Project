import { Header } from "antd/lib/layout/layout";
import React from "react";
import logo from "assets/Airbnb_Logo.svg.png";
import { Link } from "react-router-dom";
import OptionBar from "components/OptionBar";
import { Divider } from "antd";

const CHeader = () => {
  return (
    <div>
      <Header className="flex justify-between !bg-transparent my-1.5 !h-full">
        <div className="w-[10%] flex items-center justify-center h-full pt-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[80%]" />
          </Link>
        </div>
        <div className="w-[35%] h-full">
          <OptionBar />
        </div>
        <div className="w-[10%] text-center leading-5 pt-2">
          <h1>Dang Khoa</h1>
        </div>
      </Header>
      <Divider className="!mb-2" />
    </div>
  );
};

export default CHeader;
