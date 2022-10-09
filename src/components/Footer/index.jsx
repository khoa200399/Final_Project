import React from "react";
import { Footer } from "antd/lib/layout/layout";
import { Col, Row } from "antd";
import data from "./db.json";

const CFooter = () => {
  const { congDong, donTiepKhach, gioiThieu, hoTro } = data;
  return (
    <Footer className="!bg-[#dedede]">
      <Row>
        <Col span={6}>
          <ul>
            <li className="font-bold pb-2">GIỚI THIỆU</li>
            {gioiThieu.map((item, index) => (
              <li className="py-3" key={index}>
                <a className="text-[black]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col span={6}>
          <ul>
            <li className="font-bold pb-2">CỘNG ĐỒNG</li>
            {congDong.map((item, index) => (
              <li className="py-3" key={index}>
                <a className="text-[black]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col span={6}>
          <ul>
            <li className="font-bold pb-2">ĐÓN TIẾP KHÁCH</li>
            {donTiepKhach.map((item, index) => (
              <li className="py-3" key={index}>
                <a className="text-[black]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col span={6}>
          <ul>
            <li className="font-bold pb-2">HỖ TRỢ</li>
            {hoTro.map((item, index) => (
              <li className="py-3" key={index}>
                <a className="text-[black]" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Footer>
  );
};

export default CFooter;
