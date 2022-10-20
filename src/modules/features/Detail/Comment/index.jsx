import { Button, Divider, Rate } from "antd";
import Loader from "components/Loader";
import Readmore from "components/Readmore";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useGetCommentByRoomIdQuery } from "store/locationApi";

const UserComment = ({ roomId }) => {
  const { data, isLoading } = useGetCommentByRoomIdQuery(roomId);
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);
  const commentData = data?.content;

  useEffect(() => {
    if (commentData) {
      const cloneData = [...commentData];
      setItems(cloneData.splice(0, visible));
    }
  }, [commentData, visible]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="w-1/2 pr-3">
            <div className="flex flex-col overflow-hidden">
              <div className="flex py-3 items-center">
                <div className="w-[10%]">
                  <img
                    className="rounded-[50%] w-full h-[58px] object-cover"
                    src={item.avatar}
                    alt={item.tenNguoiBinhLuan}
                  />
                </div>
                <div className="pl-3">
                  <h1 className="text-[18px] !mb-0">{item.tenNguoiBinhLuan}</h1>
                  <span className="text-[#717171] text-[16px]">
                    {item.ngayBinhLuan
                      ? moment(item.ngayBinhLuan, "DD/MM/YYYY").format(
                          "MMMM YYYY"
                        )
                      : moment().format("MMMM YYYY")}
                  </span>
                </div>
              </div>
              <div className="h-[50px]">
                <Readmore>
                  {item.noiDung ? item.noiDung : "No comment"}
                </Readmore>
              </div>
              <Rate allowHalf disabled defaultValue={item.saoBinhLuan} />
            </div>
            <Divider />
          </div>
        ))}
      </div>

      <div>
        {visible <= commentData?.length ? (
          <Button
            className="mr-3"
            type="primary"
            onClick={() => setVisible((prev) => prev + 2)}
          >
            Load more
          </Button>
        ) : null}
        {visible > 6 ? (
          <Button danger onClick={() => setVisible(6)}>
            Load less
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default UserComment;
