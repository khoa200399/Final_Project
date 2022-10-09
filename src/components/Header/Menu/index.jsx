import { Menu } from "antd";
import React from "react";
import s from './styles.module.scss'

const CMenu = () => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["stays"]}
      className={s.menu}
    >
      <Menu.Item key="stays">
        <div className="flex items-center">
          <span>Stays</span>
        </div>
      </Menu.Item>
      <Menu.Item key="experience">Experiences</Menu.Item>
      <Menu.Item key="onlineVR">Online Experiences</Menu.Item>
    </Menu>
  );
};

export default CMenu;
