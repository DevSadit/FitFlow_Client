import pic1 from "../../../assets/bicep-53.png"
import pic2 from "../../../assets/dumbbells-50.png"
import pic3 from "../../../assets/exercise-50.png"
import pic4 from "../../../assets/stretching-50.png"
import pic5 from "../../../assets/weightlifter-48.png"
import pic6 from "../../../assets/yoga-50.png"
const Features = () => {
    return (
      <div>
        <h1 className="text-6xl font-bold text-center">
          Our <span className="text-[#ffbe0b]">Features</span>
        </h1>
        {/* cards */}
        <div className="grid gap-5 mt-5 md:grid-cols-3">
          <div className="bg-[#c7f9cc] text-center p-4 space-y-3 rounded-xl">
            <img
              src={pic1}
              alt=""
              className="mx-auto mt-5 bg-yellow-300 rounded-full"
            />
            <h1 className="text-3xl pb-4 font-bold">Masculation</h1>
            <p className="italic h-28">
              Strengthen and build muscle with tailored workouts and detailed
              progress tracking. Receive personalized plans, monitor your gains,
              and achieve your bodybuilding goals with our comprehensive
              muscle-building feature.
            </p>
          </div>
          <div className="bg-[#c7f9cc] text-center p-4 space-y-3 rounded-xl">
            <img
              src={pic2}
              alt=""
              className="mx-auto mt-5 bg-yellow-300 rounded-full"
            />
            <h1 className="text-3xl pb-4 font-bold">Body Building</h1>
            <p className="italic h-28">
              Achieve your muscle-building goals with our Body Building feature.
              Access tailored workout plans, track your progress, and get expert
              tips to maximize your strength and muscle gains.
            </p>
          </div>
          <div className="bg-[#c7f9cc] text-center p-4 space-y-3 rounded-xl">
            <img
              src={pic3}
              alt=""
              className="mx-auto mt-5 bg-yellow-300 rounded-full"
            />
            <h1 className="text-3xl pb-4 font-bold">Running</h1>
            <p className="italic h-28">
              Track your running sessions with precision. Monitor your distance,
              pace, and calories burned, set personal goals, and analyze your
              progress to improve your endurance and achieve your running
              milestones.
            </p>
          </div>
          <div className="bg-[#c7f9cc] text-center p-4 space-y-3 rounded-xl">
            <img
              src={pic4}
              alt=""
              className="mx-auto mt-5 bg-yellow-300 rounded-full"
            />
            <h1 className="text-3xl pb-4 font-bold">Stretching</h1>
            <p className="italic h-28">
              Enhance your flexibility and prevent injuries with our Stretching
              feature. Access guided routines, track your stretching sessions,
              and integrate them seamlessly into your daily fitness regimen.
            </p>
          </div>
          <div className="bg-[#c7f9cc] text-center p-4 space-y-3 rounded-xl">
            <img
              src={pic5}
              alt=""
              className="mx-auto mt-5 bg-yellow-300 rounded-full"
            />
            <h1 className="text-3xl pb-4 font-bold">Weight Lifting</h1>
            <p className="italic h-28">
              Track your weight lifting routines with detailed logs and progress
              charts. Customize workouts, set personal records, and monitor your
              strength gains to achieve your fitness goals effectively.
            </p>
          </div>
          <div className="bg-[#c7f9cc] text-center p-4 space-y-3 rounded-xl">
            <img
              src={pic6}
              alt=""
              className="mx-auto mt-5 bg-yellow-300 rounded-full"
            />
            <h1 className="text-3xl pb-4 font-bold">Yoga</h1>
            <p className="italic h-28">
              Discover the benefits of Yoga with our guided sessions. Enhance
              flexibility, reduce stress, and improve overall well-being with
              personalized routines designed to fit your fitness level and
              goals.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Features;