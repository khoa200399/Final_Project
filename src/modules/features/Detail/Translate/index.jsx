import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useGetTranslateMutation } from "store/translationApi";
import axios from "axios";
import Readmore from "components/Readmore";

const TranslateDescription = ({ translateText }) => {
  const [lang, setLang] = useState("vi");
  const [text, setText] = useState(translateText);

  const handleSelect = (targetLang) => {
    setLang(lang);
  };

  return (
    <div>
      <Select
        suffixIcon={
          <i className="fa-solid fa-language text-[#5290f5] text-[18px]"></i>
        }
        defaultValue={"vi"}
        style={{ width: "100%" }}
        onSelect={handleSelect}
      >
        <Select.Option value="vi">Translate to Vietnamese</Select.Option>
        <Select.Option value="en">Translate to English</Select.Option>
      </Select>
      <p className="text-[16px] pt-2"></p>
      <Readmore>{text.charAt(0).toUpperCase() + text.slice(1)}</Readmore>
    </div>
  );
};

export default TranslateDescription;
