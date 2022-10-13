import { Col, Row } from "antd";
import React from "react";
import pic1 from "assets/img/location_1.jpg";
import pic2 from "assets/img/location_2.jpg";
import pic3 from "assets/img/location_3.jpg";
import pic4 from "assets/img/location_4.jpg";

const Anywhere = () => {
  return (
    <div className="flex justify-center items-center py-[40px] flex-col">
      <h1 className="text-[40px] font-bold">Discover Nearby Destinations</h1>
      <Row className="w-4/5">
        <Col xs={12} sm={12} md={6} className="p-3">
          <div>
            <img
              src={pic1}
              alt="pic1"
              className="object-cover w-full h-[250px] rounded-md"
            />
          </div>
          <h1>Whole House</h1>
        </Col>
        <Col xs={12} sm={12} md={6} className="p-3">
          <div>
            <img
              src={pic2}
              alt="pic2"
              className="object-cover w-full h-[250px] rounded-md"
            />
          </div>
          <h1>Unique Stays</h1>
        </Col>
        <Col xs={12} sm={12} md={6} className="p-3">
          <div>
            <img
              src={pic3}
              alt="pic3"
              className="object-cover w-full h-[250px] rounded-md"
            />
          </div>
          <h1>Farm and Natural</h1>
        </Col>
        <Col xs={12} sm={12} md={6} className="p-3">
          <div>
            <img
              src={pic4}
              alt="pic4"
              className="object-cover w-full h-[250px] rounded-md"
            />
          </div>
          <h1>Pets Allow</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Anywhere;
