/* eslint-disable react-hooks/exhaustive-deps */

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
import { useQuery } from "@tanstack/react-query";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const [testimonials, setTestimonials] = useState([]);

  // fetched the data using tenstack query
  const { data: tstmonials = [] } = useQuery({
    queryKey: ["tstmonials"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/testimonials`);
      return res.data;
    },
  });

  // set the fetched data in usestae
  useEffect(() => {
    setTestimonials(tstmonials);
  }, [tstmonials]);

  return (
    <div className="mt-12">
      <h1 className="text-6xl font-bold text-center">
        What Our <span className="text-[#ffbe0b]">Client</span> Says
      </h1>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="flex flex-col text-center gap-4 items-center lg:px-80 px-5 py-12">
                <img
                  className="w-20 h-20 rounded-full"
                  src={testimonial.image}
                />
                <h3 className="font-bold uppercase text-2xl ">
                  {testimonial.name}
                </h3>
                <p>{testimonial.location}</p>
                <FaQuoteLeft className="w-10 h-10 mt-3" />
                <p className="italic font-semibold">
                  {testimonial.testimonial}
                </p>
                <FaQuoteRight className="w-10 h-10 mt-3" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
