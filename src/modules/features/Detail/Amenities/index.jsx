import React from "react";

const Amenities = ({ amenities = {} }) => {
  return (
    <div className="flex flex-wrap gap-y-[20px]">
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-mattress-pillow pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.banLa && "line-through",
          }}
        >
          Iron
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-fire-burner pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.bep && "line-through",
          }}
        >
          Kitchen
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-snowflake pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.dieuHoa && "line-through",
          }}
        >
          Air Condition
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-car pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.doXe && "line-through",
          }}
        >
          Free Parking
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-water-ladder pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.hoBoi && "line-through",
          }}
        >
          Pool
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-snowplow pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.mayGiat && "line-through",
          }}
        >
          Washing Machine
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-tv pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.tivi && "line-through",
          }}
        >
          Television
        </span>
      </div>
      <div className="w-1/2 flex items-center">
        <i className="fa-solid fa-wifi pr-2 text-[25px] w-[12%] text-[#FF385B]"></i>
        <span
          style={{
            fontSize: "17px",
            textDecoration: !amenities.wifi && "line-through",
          }}
        >
          Wifi
        </span>
      </div>
    </div>
  );
};

export default Amenities;
