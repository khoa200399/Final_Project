import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ava from "assets/img/location_1.jpg";
import "./styles.scss";
import { Divider, Input } from "antd";
import EditInfo from "./EditUserInfo";

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!userInfo || !token) return navigate("/auth/login");
  }, [navigate, token, userInfo]);
  return (
    <div className="flex justify-center py-[30px]">
      <div className="flex w-4/5">
        <div className="w-[30%] flex justify-center">
          <div className="card">
            <div className="avatar">
              <img src={ava} alt="" />
            </div>
            <Divider />
            <div className="verify">
              <i className="fa-solid fa-user-shield pr-2 text-[25px]"></i>
              <h1 className="pt-4 text-[18px]">Identity verification</h1>
              <p className="text-[16px]">
                Show others you’re really you with the identity verification badge.
              </p>
              <button className="getBadgeBtn">Get the badge</button>
            </div>
            <Divider />
            <div className="pb-4">
              <h1 className="text-[22px]">{userInfo?.name} confirmed</h1>
              <span className="flex items-center">
                <i className="fa-solid fa-check text-[25px] pr-2"></i>
                <span className="text-[16px] font-normal">Email address</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-[70%] px-5">
          <div>
            <h1 className="text-[30px] !mb-2">Hi, I'm {userInfo?.name}</h1>
            <p className="text-[16px] text-[#717171] font-thin">Joined in 2022</p>
          </div>
          <Divider />
          <div>
            <h1 className="text-[30px]">Personal info</h1>
            <EditInfo userID={userInfo?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
