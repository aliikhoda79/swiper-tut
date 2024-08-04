// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";

// import css files
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "../index.css";

//import information used
import data from "../utils/data";
import img from "../assets/images/QAsset 1.png";

function SwiperComponent() {
  return (
    <div className=" parent">
      <div className="imgContainer ">
        <img src={img} alt="img" className="w-full" />
      </div>

      <div>
        <Swiper
          modules={[EffectCards, Navigation]}
          effect={"cards"}
          loop={true}
          spaceBetween={25}
          navigation
          grabCursor={true}
          // navigation={{hideOnClick:true}}
          className=" mySwiper "
        >
          {data.map((i) => (
            <SwiperSlide className="swiperSlide " key={i.id}>
              <div className=" info ">
                <h3>{i.title}</h3>
                <p>{i.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperComponent;
