import React, { useState } from "react";

const Readmore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <h1 className="text font-normal text-[16px]">
      {isReadMore ? text.slice(0, 200).concat("...") : text}
      <p
        onClick={toggleReadMore}
        className="font-bold cursor-pointer underline text-[16px] hover:opacity-50 ease-out duration-500"
      >
        {text.length < 200 ? null : isReadMore ? "Read more" : "Show less"}
      </p>
    </h1>
  );
};

export default Readmore;
