import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCreative } from "swiper/modules";

const images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
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
            <div className="w-full  aspect-video max-h-[100vh] bg-[#051838] p-0  md:p-5">
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
