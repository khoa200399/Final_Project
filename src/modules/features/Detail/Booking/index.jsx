import { DatePicker, Divider, Spin } from "antd";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useBookingRoomMutation, useGetBookingQuery } from "store/locationApi";
import { formatterCurrency } from "utils/currencyConv";
import { disableRangesDate } from "utils/dateRange";
import CustomerPicker from "./CustomerPicker";
import s from "./styles.module.scss";

const { RangePicker } = DatePicker;

const Booking = ({ roomDetail }) => {
  const { data } = useGetBookingQuery();
  const [bookingRoom, { data: bookingData, isLoading, isSuccess }] =
    useBookingRoomMutation();
  const navigate = useNavigate();
  const [rangeDateBooked, setRangeDateBooked] = useState(null);
  const [totalCustomer, setTotalCustomer] = useState(1);
  const randomServiceFee = Math.floor(Math.random() * (10 - 0) + 0);
  const numberDays = useMemo(() => {
    if (!rangeDateBooked) return 0;
    return moment.duration(rangeDateBooked[1]?.diff(rangeDateBooked[0])).asDays() + 1;
  }, [rangeDateBooked]);
  const disableDates = useMemo(() => {
    const bookedRoom = data?.content?.filter((item) => item.maPhong === roomDetail?.id);
    const bookedDate = bookedRoom?.map((item) => ({
      from: moment(item.ngayDen).format("DD/MM/YYYY"),
      to: moment(item.ngayDi).format("DD/MM/YYYY"),
    }));
    return bookedDate;
  }, [data?.content, roomDetail?.id]);

  const handleBooking = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userId = userInfo.id;
    const token = localStorage.getItem("token");
    if (!userInfo || !token) navigate("/auth/login");
    if (!rangeDateBooked) return toast.error("Please choose your date!");
    bookingRoom({
      id: 1,
      maPhong: roomDetail.id,
      ngayDen: moment(rangeDateBooked[0]).format("YYYY-MM-DDTHH:mm:ss.sssZ"),
      ngayDi: moment(rangeDateBooked[1]).format("YYYY-MM-DDTHH:mm:ss.sssZ"),
      soLuongKhach: totalCustomer,
      maNguoiDung: userId,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.reload();
      toast.success("Booking Successfully!");
    }
  }, [isSuccess]);

  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className="flex items-center justify-between w-full pb-[20px]">
          <h1 className="text-[25px] font-bold !mb-0">
            {formatterCurrency.format(roomDetail?.giaTien)}
            <span className="text-[20px] font-light">/night</span>
          </h1>
          <span className="text-[14px]">
            ★{" "}
            <span className="font-bold">{(Math.random() * (5 - 1) + 1).toFixed(2)}</span>{" "}
            •{" "}
            <a href="javascript:void(0)" className="text-[#717171] underline font-bold">
              {Math.floor(Math.random() * (1000 - 1) + 1)} reviews
            </a>
          </span>
        </div>
        <div className="w-full flex flex-col">
          <RangePicker
            className={s.dateRangePicker}
            disabledDate={disableRangesDate(disableDates)}
            onChange={(range) => setRangeDateBooked(range)}
          />
          <CustomerPicker
            maxQuanity={roomDetail?.khach}
            onChange={(total) => setTotalCustomer(total)}
          />
          <button className={s.bookingBtn} onClick={handleBooking}>
            Reserve
            {isLoading ? <Spin className="!ml-3" /> : null}
          </button>
          <span className="text-[14px] text-center">You won't be charged yet!</span>
          <div>
            <div className="flex justify-between pt-5 text-[16px]">
              <h2 className="font-normal">
                {formatterCurrency.format(roomDetail?.giaTien)} x {numberDays} nights
              </h2>
              <h2 className="font-normal">
                {formatterCurrency.format(roomDetail?.giaTien * numberDays)}
              </h2>
            </div>
            <div className="flex justify-between text-[16px]">
              <h2 className="font-normal">Services fee</h2>
              <h2 className="font-normal">
                {formatterCurrency.format(randomServiceFee)}
              </h2>
            </div>
            <Divider className="!my-[10px]" />
            <div className="flex justify-between text-[16px]">
              <h2 className="font-bold">Total before taxes</h2>
              <h2 className="font-bold">
                {formatterCurrency.format(
                  roomDetail?.giaTien * numberDays + randomServiceFee
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
