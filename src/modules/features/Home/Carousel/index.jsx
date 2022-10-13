import React, { useRef } from "react";
import { Carousel } from "antd";
import pic1 from "assets/img/carousel_1.jpg";
import pic2 from "assets/img/carousel_2.jpg";
import pic3 from "assets/img/carousel_3.jpg";
import pic4 from "assets/img/carousel_4.jpg";
import s from "./styles.module.scss";

const CustomCarousel = () => {
  const carouselRef = useRef(null);
  console.log(carouselRef);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  return (
    <div className={s.wrapper}>
      <div className={s.nextBtn} onClick={() => carouselRef?.current.next()}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className={s.prevBtn} onClick={() => carouselRef?.current.prev()}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <Carousel {...settings} ref={carouselRef}>
        <div className={s.slideWrapper}>
          <img className={s.image} src={pic1} alt="carousel_1" />
        </div>
        <div className={s.slideWrapper}>
          <img className={s.image} src={pic2} alt="carousel_2" />
        </div>
        <div className={s.slideWrapper}>
          <img className={s.image} src={pic3} alt="carousel_3" />
        </div>
        <div className={s.slideWrapper}>
          <img className={s.image} src={pic4} alt="carousel_4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
