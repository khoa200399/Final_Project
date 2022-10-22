import moment from "moment";

export function disableDateRanges(
  range = { startDate: false, endDate: false }
) {
  const { startDate, endDate } = range;
  return function disabledDate(current) {
    return (
      current > moment(startDate, "DD/MM/YYYY") &&
      current < moment(endDate, "DD/MM/YYYY").endOf("day")
    );
  };
}
