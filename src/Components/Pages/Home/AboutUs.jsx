import pic1 from "../../../assets/abou1.jpg"
import pic2 from "../../../assets/abou2.jpg"

const AboutUs = () => {
    return (
      <div className="">
        <div className="flex mt-20">
          <div className="text-left w-1/3 pr-5 space-y-4">
            <h1 className="text-6xl mb-9 italic font-extrabold ">
              <span className="text-[#ffbe0b]">About </span>
              Our <span className="text-[#ffbe0b]">Fit</span> Family
            </h1>
            <p>
              Welcome to Fit Flow, where your fitness journey becomes a story of
              progress, passion, and personal transformation. We believe in
              empowering you with the tools and insights you need to reach your
              goals, one step at a time. Our mission is to make fitness an
              integral and enjoyable part of your daily life. Whether
              {"you’re"} a seasoned athlete or just starting out, our intuitive
              platform offers personalized workouts, real-time progress
              tracking, and a vibrant community to keep you motivated. At [Your
              Website Name], we understand that every fitness journey is unique.
              {"That’s"} why {"we’ve"} created a space where you can set your
              own pace, celebrate your achievements, and push your limits. Join
              us and discover a healthier, happier you—because every journey
              begins with a single step, and {"we’re"} here to walk with you all
              the way.
            </p>
          </div>
          <div className=" mb-20 flex justify-evenly flex-1">
            <img className="w-1/3 h-full" src={pic1} />
            <img className="w-1/3 h-full mt-24" src={pic2} />
          </div>
        </div>
      </div>
    );
};

export default AboutUs;