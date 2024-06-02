/* eslint-disable react-hooks/exhaustive-deps */
import pic1 from "../../../assets/abou1.jpg";
import pic2 from "../../../assets/abou2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CompoHeading from "../../Shared/CompoHeading";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axiosPublic
      .get(`/testimonials`)
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-12">
      <h1 className="text-6xl font-bold text-center">
        What Our <span className="text-[#ffbe0b]">Client</span> Says
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="flex flex-col text-center gap-4 items-center px-80 py-12">
              <img className="w-20 h-20 rounded-full" src={testimonial.image} />
              <h3 className="font-bold uppercase text-2xl ">
                {testimonial.name}
              </h3>
              <p>{testimonial.location}</p>
              <FaQuoteLeft className="w-10 h-10 mt-3" />
              <p className="italic font-semibold">{testimonial.testimonial}</p>
              <FaQuoteRight className="w-10 h-10 mt-3" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
