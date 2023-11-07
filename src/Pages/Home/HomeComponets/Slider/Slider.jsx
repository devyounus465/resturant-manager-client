import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="image relative">
            <img src="https://i.ibb.co/kqSs4bW/home-top-1-1.jpg" alt="" />
            <div className="title-content absolute top-[35%] left-[25%] text-white text-center space-y-4">
              <h2 className="text-8xl font-bold mb-3">Come In & Taste</h2>
              <p className="text-xl tracking-widest">
                We are cretae sweet memories
              </p>
              <Link to={"/allfood"}>
                <button className=" btn bg-[#F63701] text-white border border-[#F63701] hover:text-[#F63701] hover:border-[#F63701] mt-4">
                  Show All Food
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img src="https://i.ibb.co/7WRGw1c/6.jpg" alt="" />
            <div className="title-content absolute top-[0] left-[0] right-0 bottom-0 flex justify-center items-center text-white text-center space-y-4">
              <div>
                <h2 className="text-8xl font-bold mb-3">I Loove It</h2>
                <p className="text-xl tracking-widest">
                  We are cretae sweet memories
                </p>
                <Link to={"/allfood"}>
                  <button className=" btn bg-[#F63701] text-white border border-[#F63701] hover:text-[#F63701] hover:border-[#F63701] mt-4">
                    Show All Food
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
