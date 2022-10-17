import { Avatar, Divider } from "antd";
import Loader from "components/Loader";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useGetDetailRoomQuery,
  useGetLocationByIdQuery,
} from "store/locationApi";
import TranslateDescription from "./Translate";

const hardDetail = [
  {
    icon: <i className="fa-solid fa-house"></i>,
    title: "Whole Place",
    description: "You will have a luxury apartment for yourself",
  },
  {
    icon: <i className="fa-solid fa-hand-sparkles"></i>,
    title: "Enhenced Cleaning",
    description: "Owner has committed to a 5-step cleaning proccess by Airbnb",
  },
  {
    icon: <i className="fa-solid fa-medal"></i>,
    title: "Khoa Dang is a Super Host",
    description:
      "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
  },
  {
    icon: <i className="fa-solid fa-calendar"></i>,
    title: "Free cancel booking in 48 hours",
    description: "",
  },
];

const RoomDetail = () => {
  const location = useLocation();
  const roomId = location?.state.id;
  const { data, isLoading, isSuccess } = useGetDetailRoomQuery(roomId);
  const roomDetail = data?.content;
  const { data: locationData, isLoading: isLocationLoading } =
    useGetLocationByIdQuery(roomDetail?.maViTri);
  const locationDetail = locationData?.content;
  const [amenities, setAmenities] = useState({});

  useEffect(() => {
    if (isSuccess) {
      const {
        id,
        giaTien,
        tenPhong,
        hinhAnh,
        phongTam,
        phongNgu,
        moTa,
        khach,
        maViTri,
        giuong,
        ...amenities
      } = roomDetail;
      setAmenities(amenities);
    }
  }, [isSuccess, roomDetail]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="px-[40px] py-[30px] flex flex-col justify-center items-center">
      <div className="w-[80%]">
        <div>
          <h1 className="text-[22px]">{roomDetail.tenPhong}</h1>
          <div>
            <span>4,83(18 ratings)</span>
            <span>Superhost</span>
            {isLocationLoading ? (
              <Loader />
            ) : (
              <span>
                {locationDetail.tenViTri}, {locationDetail.tinhThanh},
                {locationDetail.quocGia}
              </span>
            )}
          </div>
        </div>

        <div className="py-4">
          <img
            className="w-full rounded-lg"
            src={roomDetail.hinhAnh}
            alt={roomDetail.id}
          />
        </div>

        <div className="flex">
          <div className="w-[70%]">
            <div className="flex justify-between pr-[40px]">
              <div>
                <h1>Whole Place • Hosted by Khoa Dang</h1>
                <span>
                  {roomDetail.khach} Guests ∙ {roomDetail.phongNgu} Bedrooms ∙
                  {roomDetail.giuong} beds ∙ {roomDetail.phongTam} baths
                </span>
              </div>
              <Avatar
                size={60}
                src="https://anhdephd.vn/wp-content/uploads/2022/04/avatar-facebook-doc-1.jpg"
              />
            </div>
            <Divider />
            <div>
              {hardDetail.map((item, index) => (
                <div key={index} className="flex items-center pb-4">
                  <div className="text-[30px] w-[5%] flex justify-center text-[#FF385B]">
                    {item.icon}
                  </div>
                  <div className="pl-3">
                    <h1>{item.title}</h1>
                    <p className="!mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Divider />
            <div>
              <TranslateDescription translateText={roomDetail.moTa} />
            </div>
            <Divider />
            <div>
              <h1 className="text-[22px]">What this place offers</h1>
              <div>
                {/* {amenities?.map((item) => (
                  <h1>{item}</h1>
                ))} */}
              </div>
            </div>
          </div>

          <div className="w-[30%]">Booking room</div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
