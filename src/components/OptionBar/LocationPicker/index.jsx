import { Button, Divider, Select } from "antd";
import Loader from "components/Loader";
import React, { useState } from "react";
import { useGetLocationQuery } from "../locationApi";
import s from "./styles.module.scss";

const { Option } = Select;

const LocationPicker = () => {
  const { data, isLoading } = useGetLocationQuery();
  const [selectItem, setSelectItem] = useState("");

  return (
    <div className={s.wrapper}>
      <Button className={` ${s.locationBtn} ${s.btn} `}>
        <div className={s.test}>
          <h1>Where</h1>
          <Select
            placeholder="Search destinations"
            showSearch
            className={s.locationList}
            loading={isLoading}
            onSelect={(item) => setSelectItem(JSON.parse(item))}
          >
            {data?.content.map((item) => (
              <Option key={item.id} value={JSON.stringify(item)}>
                <i class="fa-solid fa-location-dot pr-2 text-[red]"></i>
                {item.tenViTri}, {item.tinhThanh}, {item.quocGia}
              </Option>
            ))}
          </Select>
        </div>
      </Button>

      <Divider
        type="vertical"
        className="!bg-[#ebebeb]"
        style={{ height: "35px" }}
      />

      <Button className={`${s.checkinBtn} ${s.btn}`}>
        <h1>Check in</h1>
        <p className="text-[#a6a6a6]">Add dates</p>
      </Button>

      <Divider
        type="vertical"
        className="!bg-[#ebebeb]"
        style={{ height: "35px" }}
      />
      <Button className={`${s.checkoutBtn} ${s.btn}`}>
        <h1>Check out</h1>
        <p className="text-[#a6a6a6]">Add dates</p>
      </Button>
      <Divider
        type="vertical"
        className="!bg-[#ebebeb]"
        style={{ height: "35px" }}
      />
      <Button className={`${s.addGuestBtn} ${s.btn}`}>
        <div className="flex flex-col w-1/2">
          <h1>Who</h1>
          <p className="text-[#a6a6a6]">Add guests</p>
        </div>
        <div className={s.searchIcon}>
          <i className="fa-solid fa-magnifying-glass pr-2"></i> Search
        </div>
      </Button>
    </div>
  );
};

export default LocationPicker;
