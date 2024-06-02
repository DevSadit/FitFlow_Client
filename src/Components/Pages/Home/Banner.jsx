import bannerPic from "../../../assets/Contact.png";
const Banner = () => {
    return (
      <div>
        <img className="w-full h-[720px] relative" src={bannerPic} alt="" />
        <h1 className="absolute  text-9xl italic font-extrabold text-white md:left-1/4 top-1/4 text-center">
          Your only <span className="text-[#fee440]">limit</span> <br /> is {" "}
          <span className="text-[#fee440]">you</span>.{/* paragraoph */}
          <p className="absolute text-base mt-9">
            Track your fitness journey and achieve your goals with our intuitive
            tracker. Stay motivated, monitor your progress, and be your best
            every day. Join us to make every workout count and reach new heights
            in your fitness adventure.
          </p>
          <button className="bg-[#fee440] absolute cursor-pointer hover:bg-[#ffbe0b] px-5 py-4 text-xl -bottom-44 text-black left-96">
            Join Today
          </button>
        </h1>
      </div>
    );
};

export default Banner;