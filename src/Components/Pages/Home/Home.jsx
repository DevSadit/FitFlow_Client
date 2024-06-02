import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Features from "./Features";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="space-y-12">
          <Banner></Banner>
          <Features></Features>
          <AboutUs></AboutUs>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;