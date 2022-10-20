import { Header } from "antd/lib/layout/layout";
import React from "react";
import logo from "assets/Airbnb_Logo.svg.png";
import { Link } from "react-router-dom";
import OptionBar from "components/OptionBar";
import { Avatar, Button, Divider, Dropdown, Menu } from "antd";
import s from "./styles.module.scss";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "modules/features/Login/authSlice";

const menuUser = (dispatch) => (
  <Menu className="bg-white !rounded-[10px] !px-3">
    <Menu.Item key="login">Sign up</Menu.Item>
    <Menu.Item key="signup">
      <Link to="auth/login">Log in</Link>
    </Menu.Item>
    <Menu.Item key="logout" onClick={() => dispatch(logout())}>Log out</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="hostHome">Host your home</Menu.Item>
    <Menu.Item key="hostExp">Host an experience</Menu.Item>
    <Menu.Item key="help">Help</Menu.Item>
  </Menu>
);

const CHeader = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header className="flex justify-between !bg-transparent my-1.5 !h-full">
        <div className="w-[20%] flex items-center justify-center h-full pt-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[50%]" />
          </Link>
        </div>
        <div className="w-[35%] h-full">
          <OptionBar />
        </div>
        <div className="w-[20%] flex justify-between items-center">
          <div>
            <Button className={s.hostBtn}>Become a Host</Button>
          </div>
          <div>
            <Button className={s.languageBtn}>
              <i className="fa-solid fa-globe"></i>
            </Button>
          </div>
          <Dropdown overlay={menuUser(dispatch)}>
            <div className={s.userBtn}>
              <MenuOutlined className="text-[17px] ml-2" />
              <Avatar
                className="!ml-3 !bg-[#717171]"
                size={30}
                icon={<UserOutlined className="text-[28px]" />}
              />
            </div>
          </Dropdown>
        </div>
      </Header>
      <Divider className="!mb-2" />
    </div>
  );
};

export default CHeader;
