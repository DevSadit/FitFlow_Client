import { Link } from "react-router-dom";
import bannerPic from "../../../assets/Contact.png";
const Banner = () => {
    return (
      // <div>
      //   <img className="w-full h-[720px] relative" src={bannerPic} alt="" />
      //   <h1 className="absolute  lg:text-9xl md:text-7xl text-6xl italic font-extrabold text-white md:left-1/4 top-1/4 text-center">
      //     Your only <span className="text-[#fee440]">limit</span> <br /> is{" "}
      //     <span className="text-[#fee440]">you</span>.{/* paragraoph */}
      //     <p className="absolute text-base mt-9 md:p-0 p-5">
      //       Track your fitness journey and achieve your goals with our intuitive
      //       tracker. Stay motivated, monitor your progress, and be your best
      //       every day. Join us to make every workout count and reach new heights
      //       in your fitness adventure.
      //     </p>
      //     <Link
      //       to="/allClasses"
      //       className="bg-[#fee440] absolute lg:top-96 md:top-80 md:right-44 lg:left-96 cursor-pointer hover:bg-[#ffbe0b] top-96 right-36 px-5 py-4 text-xl text-black"
      //     >
      //       Join Today
      //     </Link>
      //   </h1>
      // </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerPic})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-7xl italic font-extrabold text-white ">
              Your Only Limit is You
            </h1>
            <p className="mb-5 text-base italic">
              Track your fitness journey and achieve your goals with our
              intuitive tracker. Stay motivated, monitor your progress, and be
              your best every day. Join us to make every workout count and reach
              new heights in your fitness adventure.
            </p>
            <Link to="/allClasses">
              <button className="bg-[#fee440] text-black px-4 md:px-7 md:py-4 py-2 hover:bg-[#9f8e20] font-bold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;