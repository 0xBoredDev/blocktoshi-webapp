import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FC } from "react";
import { Ord } from "../models/ord";
import ord_logo from "../assets/ordinal_logo.png";

interface OrdProps {
  ordData: Ord[];
}

export const OrdSlide: FC<OrdProps> = ({ ordData }) => {
  let i = 0;
  //   console.log(data);
  let slides = ordData.map((o) => (
    <SwiperSlide key={i++}>
      <div className="design-card">
        <img src={o.img} className="img-fluid o-img" alt="img" />
        <div className="ord-info">
          <p className="ord-name1">{o.inscription}</p>
          <div className="vr ord-name2">&nbsp;|&nbsp;</div>
          <p className="ord-name2">{o.name}</p>
        </div>
        <p className="ord-title mb-1">{o.trait}</p>
        <div className="ord-info">
          <a
            className="ord-icon underline"
            href={`https://ordinals.com/inscription/${o.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ord_logo.src}
              alt="ord logo"
              className="text-xs h-8 w-8"
            />
          </a>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="ordSwiper"
    >
      {slides}
    </Swiper>
  );
};

export default OrdSlide;
