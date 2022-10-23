import { Col, Divider, Row } from "antd";
import Loader from "components/Loader";
import moment from "moment";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetRoomByLocationQuery } from "store/locationApi";
import removeVietnameseTones from "utils/convertVie";
import s from "./styles.module.scss";

const tags = [
  "Stay types",
  "Price",
  "Book now",
  "Rooms & Bedrooms",
  "Another Filter",
];

const ListRoom = () => {
  const location = useLocation();
  const locationID = location.state?.location.id;
  const cityName = removeVietnameseTones(location.state?.location.tenViTri);
  const { data, isLoading } = useGetRoomByLocationQuery(locationID || 0);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const listRoom = data?.content;
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Row className="px-[40px] py-[30px]">
        <Col span={16} className="h-full pr-8">
          <div>
            <span className="text-[18px] text-[#7b7b7b]">
              More than 300 stays • {moment().format("MMM Do")} -
              {moment().add("20", "days").format("MMM Do")}
            </span>
            <h1 className="text-[30px] pt-2 !mb-0">ROOMS FROM YOUR CHOOSE</h1>
            <div className="py-1">
              {tags.map((tag, index) => (
                <button key={index} className={s.tag}>
                  {tag}
                </button>
              ))}
              <Divider />
            </div>
          </div>
          <div className="flex flex-col">
            {listRoom?.map((room) => (
              <div key={room.id}>
                <div className="flex ">
                  <div className="w-[40%]">
                    <Link to={`/detail/${room.id}`} state={{ id: room.id }}>
                      <img
                        className="w-full h-[200px] object-cover rounded-xl"
                        src={room.hinhAnh}
                        alt={room.id}
                      />
                    </Link>
                  </div>
                  <div className="w-[60%] pl-[1.75rem] flex flex-col justify-between">
                    <div>
                      <Link to={`/detail/${room.id}`} state={{ id: room.id }}>
                        <h1 className={s.roomTitle}>{room.tenPhong}</h1>
                      </Link>
                      <span className="text-[16px]">
                        {room.khach} Guests - {room.phongNgu} Bedrooms -{" "}
                        {room.giuong} beds - {room.phongTam} baths
                      </span>
                      <p className={s.description}>
                        <i>{room.moTa}</i>
                      </p>
                    </div>
                    <div className="text-right pr-2">
                      <span className="font-bold text-[20px]">
                        {formatter.format(room.giaTien)}{" "}
                        <span className="font-light">/ night</span>
                      </span>
                    </div>
                  </div>
                </div>
                <Divider />
              </div>
            ))}
          </div>
        </Col>
        <Col span={8} className="h-full">
          <iframe
            title="Khoa"
            width="100%"
            height="700"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default ListRoom;
