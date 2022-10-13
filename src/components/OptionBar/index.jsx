import { Button } from "antd";
import React, { useState } from "react";
import s from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import CMenu from "components/Header/Menu";
import LocationPicker from "./LocationPicker";

const OptionBar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={s.wrapper}>
      <div
        className={s.content}
        onClick={() => setIsShow(true)}
        style={{
          height: isShow ? "0px" : "",
          transform: `translateY(${isShow ? "-200px" : 0})`,
        }}
      >
        <Button className={s.btn}>Anywhere</Button>
        <Button className={s.btn}>Anyweek</Button>
        <Button className={s.addGuestBtn}>Add guests</Button>
        <button className={s.searchBtn}>
          <SearchOutlined />
        </button>
      </div>

      <div
        className={s.detail}
        style={{
          height: !isShow ? "0px" : "",
          transform: `translateY(${!isShow ? "-120px" : 0})`,
        }}
      >
        <div className={s.closeBtn} onClick={() => setIsShow(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <CMenu />
        <div className={s.location}>
          <LocationPicker />
        </div>
      </div>
    </div>
  );
};

export default OptionBar;
