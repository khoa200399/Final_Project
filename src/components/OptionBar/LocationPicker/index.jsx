import { Button, Divider, Dropdown, Input, Menu } from "antd";
import React from "react";
import { useGetLocationQuery } from "../locationApi";
import s from "./styles.module.scss";

const LocationPicker = () => {
  const { data, isLoading } = useGetLocationQuery();
  console.log(data);
  const meunu = (
    <Menu className={s.menuDropdown}>
      {data?.content.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <div className="flex items-center w-full">
              <h1>
                {item.tenViTri}, {item.tinhThanh}, {item.quocGia}
              </h1>
            </div>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div className={s.wrapper}>
      <Dropdown
        overlay={meunu}
        trigger={["click"]}
        className={` ${s.locationBtn} ${s.btn} `}
      >
        <Button>
          <h1>Where</h1>
          <Input placeholder="Search destinations" className={s.inputSearch} />
        </Button>
      </Dropdown>
      <Divider type="vertical" className="!bg-[#ebebeb]" style={{ height: "35px" }} />
      <Dropdown
        overlay={<></>}
        trigger={["click"]}
        className={`${s.checkinBtn} ${s.btn}`}
      >
        <Button>
          <h1>Check in</h1>
          <p className="text-[#a6a6a6]">Add dates</p>
        </Button>
      </Dropdown>
      <Divider type="vertical" className="!bg-[#ebebeb]" style={{ height: "35px" }} />
      <Dropdown
        overlay={<></>}
        trigger={["click"]}
        className={`${s.checkoutBtn} ${s.btn}`}
      >
        <Button>
          <h1>Check out</h1>
          <p className="text-[#a6a6a6]">Add dates</p>
        </Button>
      </Dropdown>
      <Divider type="vertical" className="!bg-[#ebebeb]" style={{ height: "35px" }} />
      <Dropdown
        overlay={<></>}
        trigger={["click"]}
        className={`${s.addGuestBtn} ${s.btn}`}
      >
        <Button>
          <h1>Who</h1>
          <p className="text-[#a6a6a6]">Add guests</p>
        </Button>
      </Dropdown>
    </div>
  );
};

export default LocationPicker;
