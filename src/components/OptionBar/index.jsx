import { Button } from "antd";
import React from "react";
import s from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import CMenu from "components/Header/Menu";
import LocationPicker from "./LocationPicker";

const OptionBar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Button className={s.btn}>Anywhere</Button>
        <Button className={s.btn}>Anyweek</Button>
        <Button className={s.addGuestBtn}>Add guests</Button>
        <button className={s.searchBtn}>
          <SearchOutlined />
        </button>
      </div>
      <div className={s.detail}>
        <CMenu />
        <div className={s.location}>
          <LocationPicker />
        </div>
      </div>
    </div>
  );
};

export default OptionBar;
