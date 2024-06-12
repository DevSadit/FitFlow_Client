import dashImg from "../../assets/undraw_dashboard_re_3b76.svg"
const MainDash = () => {
    return (
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-7xl mb-5 font-bold italic">Welcome to Dashboard</h1>
        <img className="" src={dashImg} />
      </div>
    );
};

export default MainDash;