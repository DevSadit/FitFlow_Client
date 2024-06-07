import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Outlet Dynamic content */}
      <div className="flex-1 md:ml-32">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
