import { carouselImage } from "../constants";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <section className="">
      <Swiper
        className="testmonials_container m-auto grid "
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {carouselImage.map(({ id, image }) => {
          return (
            <SwiperSlide className="items-center" key={id}>
              <div className="thumb">
                <img
                  src={image}
                  alt=""
                  className="w-full rounded-[10px] h-[100%] object-cover mb-12"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="my-12">
      <h2
        className={`text-[#141824] flex justify-center text-center font-Montserrat font-semibold text-[20px]`}
      >
       An investment in knowledge pays the best interest
      </h2>
      <p  className={`text-[#141824] flex justify-center font-Montserrattext-[20px]`}>--Benjamin Franklin</p>
      </div>
    </section>
  );
};

export default Carousel;