import moment from "moment";

const rangeDate = (current, { from, to }) => {
  return current > moment(from, "DD/MM/YYYY") && current < moment(to, "DD/MM/YYYY").endOf("day")
}

export const disableRangesDate = (arr) => {
  return function disabledDate(current) {
    let result = false;
    arr?.forEach(item => {
      result |= rangeDate(current, item)
    })
    return result
  }
}