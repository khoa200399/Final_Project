import { Col, Row } from "antd";
import Loader from "components/Loader";
import React, { useEffect, useState } from "react";
import { useGetLocationPaginationQuery } from "store/locationApi";

const Locations = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 8,
    totalRow: 0,
  });
  const { data, isLoading, isSuccess } = useGetLocationPaginationQuery({
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
  });
  useEffect(() => {
    if (isSuccess) {
      const totalRow = data?.content.totalRow;
      setPagination((prev) => ({ ...prev, totalRow: totalRow }));
    }
  }, [data, isSuccess]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex justify-center items-center pt-[40px] flex-col">
      <h1 className="text-[40px] font-bold">Discover Nearby Destinations</h1>
      <Row className="w-4/5">
        {data?.content.data.map((item) => (
          <Col xs={12} sm={8} md={6} key={item.id}>
            <Row className="flex justify-center">
              <Col span={6} className="py-5">
                <div>
                  <img
                    className="w-full h-[50px] object-cover rounded-[8px]"
                    src={item.hinhAnh}
                    alt={item.id}
                  />
                </div>
              </Col>
              {/* -------------------- */}
              <Col span={18} className="py-5 px-2">
                <h1>{item.tinhThanh}</h1>
                <span className="text-[#9e9e9e]">
                  {Math.floor(Math.random() * (5 - 1 + 1)) + 1} hours driving
                </span>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Locations;
