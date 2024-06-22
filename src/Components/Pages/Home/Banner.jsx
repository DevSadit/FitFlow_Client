import { Link } from "react-router-dom";
import bannerPic from "../../../assets/Contact.png";
const Banner = () => {
    return (
   
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