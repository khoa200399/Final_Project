import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Spin />
    </div>
  );
};

export default Loader;
