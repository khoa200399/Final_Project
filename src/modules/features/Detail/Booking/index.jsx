import { DatePicker } from "antd";
import moment from "moment";
import { useGetBookingQuery } from "store/locationApi";
import { disableDateRanges } from "utils/dateRange";

const { RangePicker } = DatePicker;

const Booking = ({ roomDetail }) => {
  const { data, isLoading } = useGetBookingQuery();
  const filterd = data?.content?.filter(
    (item) => item.maPhong === roomDetail?.id
  );
  console.log(filterd);
  return (
    <div>
      <h1>{roomDetail?.giaTien}$/night</h1>
      <RangePicker
        disabledDate={(current) =>
         ( current > moment("20/10/2022", "DD/MM/YYYY") &&
          current < moment("20/10/2022", "DD/MM/YYYY").endOf("day")) || (current > moment("23/10/2022", "DD/MM/YYYY") &&
          current < moment("23/10/2022", "DD/MM/YYYY").endOf("day"))
        }
      />
    </div>
  );
};

export default Booking;
