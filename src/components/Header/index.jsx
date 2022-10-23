import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import logo from "assets/Airbnb_Logo.svg.png";
import { Link, useLocation } from "react-router-dom";
import OptionBar from "components/OptionBar";
import { Avatar, Button, Divider, Dropdown, Menu } from "antd";
import s from "./styles.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "modules/features/Authentication/authSlice";
import { stringAvatar } from "utils/generateAvatar";

const CHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    setToken(localStorage.getItem("token"));
  }, []);

  const menuUser = (dispatch) => (
    <Menu className="bg-white !rounded-[10px] !px-3">
      {!userInfo && !token && (
        <Menu.Item key="login">
          <Link to="/auth/register">Sign up</Link>
        </Menu.Item>
      )}
      {!userInfo && !token && (
        <Menu.Item key="signup">
          <Link to="/auth/login">Log in</Link>
        </Menu.Item>
      )}
      {userInfo && token && (
        <Menu.Item key="profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      )}

      <Menu.Divider />
      <Menu.Item key="hostHome">Host your home</Menu.Item>
      <Menu.Item key="hostExp">Host an experience</Menu.Item>
      <Menu.Item key="help">Help</Menu.Item>
      {userInfo && token && <Menu.Divider />}
      {userInfo && token && (
        <Menu.Item
          key="logout"
          onClick={() => {
            dispatch(logout());
            window.location.reload();
          }}
        >
          Log out
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div>
      <Header className="flex justify-between !bg-transparent my-1.5 !h-full items-center">
        <div className=" flex items-center justify-start h-full pt-2 flex-[1_0_140px]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[120px]" />
          </Link>
        </div>
        <div className="h-full m-w-[350px]">
          {location.pathname === "/profile" ? null : <OptionBar />}
        </div>
        <div className=" flex justify-end items-center flex-[1_0_140px]">
          <div>
            <Button className={s.hostBtn}>Become a Host</Button>
          </div>
          <div>
            <Button className={s.languageBtn}>
              <i className="fa-solid fa-globe text-[20px]"></i>
            </Button>
          </div>
          <Dropdown overlay={menuUser(dispatch)}>
            <div className={s.userBtn}>
              <MenuOutlined className="text-[17px] ml-2" />
              <Avatar
                {...stringAvatar(userInfo?.name)}
                size={30}
                className="!ml-3"
                // icon={<UserOutlined className="text-[28px] !bg-[#6b6b6b]"/>}
              />
            </div>
          </Dropdown>
        </div>
      </Header>
      <Divider className="!mt-2" />
    </div>
  );
};

export default CHeader;
