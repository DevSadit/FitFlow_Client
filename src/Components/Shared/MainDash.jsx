import { useEffect, useState } from "react";
import dashImg from "../../assets/undraw_dashboard_re_3b76.svg";
import { FaDumbbell, FaChartLine, FaCalendarAlt, FaUserFriends, FaHome, FaUtensils, FaAddressBook, FaRegUser, FaCalendar, FaDAndD } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuthContext from "../hooks/useAuthContext";

const MainDash = () => {
  const [greeting, setGreeting] = useState("");
  const [role, isRoleLoading] = useRole();
  const { user } = useAuthContext();
  
  const [stats] = useState([
    { id: 1, title: "Workouts Completed", value: "24", icon: <FaDumbbell />, color: "from-green-400 to-green-600" },
    { id: 2, title: "Progress Rate", value: "68%", icon: <FaChartLine />, color: "from-blue-400 to-blue-600" },
    { id: 3, title: "Active Plans", value: "3", icon: <FaCalendarAlt />, color: "from-purple-400 to-purple-600" },
    { id: 4, title: "Community Rank", value: "Silver", icon: <FaUserFriends />, color: "from-amber-400 to-amber-600" },
  ]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  // Role-based navigation links
  const adminLinks = [
    { to: "/dashboard/newsletter-subsc", icon: <FaUtensils />, text: "Newsletter subscribers" },
    { to: "/dashboard/all-trainers", icon: <HiOutlineMenu />, text: "All Trainers" },
    { to: "/dashboard/applied-trainers", icon: <FaAddressBook />, text: "Applied Trainers" },
    { to: "/dashboard/ballance", icon: <FaRegUser />, text: "Balance" },
    { to: "/dashboard/add-classes", icon: <FaRegUser />, text: "Add new Class" },
  ];

  const memberLinks = [
    { to: "/dashboard/myProfile", icon: <FaHome />, text: "Profile" },
    { to: "/dashboard/apliedTrainers", icon: <FaCalendar />, text: "Activity Log" },
    { to: "/dashboard/reco-classes", icon: <FaDAndD />, text: "Recommended Classes" },
  ];

  const trainerLinks = [
    { to: "/dashboard/manage-slots", icon: <FaHome />, text: "Manage Slots" },
    { to: "/dashboard/add-slots", icon: <FaUtensils />, text: "Add New Slots" },
    { to: "/dashboard/add-post", icon: <HiOutlineMenu />, text: "Add New Forum" },
  ];

  console.log(role);
  // Determine which links to show based on user role
  const getNavLinks = () => {
    if (role === "Admin") return adminLinks;
    if (role === "member") return memberLinks;
    if (role === "Trainer") return trainerLinks;
    return [];
  };

  return (
    <div className="w-full px-4 py-8 md:py-20 transition-all duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl shadow-md overflow-hidden mb-8 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
                {greeting}, {user?.displayName || 'User'}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse-slow">
                Welcome to Dashboard
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-lg">
                Track your fitness journey, monitor progress, and achieve your goals with our comprehensive dashboard.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img 
                className="w-64 md:w-full max-w-xs object-contain transition-all duration-500 hover:scale-105" 
                src={dashImg} 
                alt="Dashboard Illustration" 
              />
            </div>
          </div>
        </div>

        {/* Role-based Navigation Cards */}
        {!isRoleLoading && role && (
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {role === "Admin" ? "Admin Controls" : role === "member" ? "Member Options" : "Trainer Tools"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getNavLinks().map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-[#21BDCE]/10 dark:hover:bg-[#21BDCE]/20 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-[#21BDCE]/20 dark:bg-[#21BDCE]/30 text-[#21BDCE] dark:text-[#21BDCE] group-hover:bg-[#21BDCE] group-hover:text-white transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="ml-3 font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#21BDCE] dark:group-hover:text-[#21BDCE] transition-all duration-300">
                    {link.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className={`h-1.5 rounded-full bg-gradient-to-r ${stat.color}`} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Start Workout', 'View Progress', 'Nutrition Plan', 'Join Challenge'].map((action, index) => (
              <button 
                key={index}
                className="py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-[#21BDCE]/10 dark:hover:bg-[#21BDCE]/30 rounded-lg text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200 text-sm text-center"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDash;