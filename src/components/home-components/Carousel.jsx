import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCreative } from "swiper/modules";

const images = [
  "images/bgimg9.png",
  "images/bgimg9.png",
  "images/bgimg9.png",
];

const Carousel = () => {
  return (
    <div className="w-full mx-auto max-w-[2048px]">
      <Swiper
        speed={500}
        grabCursor={true}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        modules={[Autoplay, EffectCreative]}
        infinite={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            shadow: true,
            translate: ["100%", 0, 0],
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="">
            <div className="w-full p-5 aspect-video max-h-[85vh] bg-white">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className=""
            />
            </div>
            
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;
