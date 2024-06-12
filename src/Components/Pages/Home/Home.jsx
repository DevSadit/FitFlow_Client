import AllClasses from "../AllClasses/AllClasses";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Features from "./Features";
import NewsLetter from "./Newsletter";
import OurTrainers from "./OurTrainers";
import RecentPosts from "./RecentPosts";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="space-y-12">
          <Banner></Banner>
          <Features></Features>
          <AboutUs></AboutUs>
          <Testimonials></Testimonials>
          <AllClasses></AllClasses>
          <RecentPosts></RecentPosts>
          <OurTrainers></OurTrainers>
          <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;