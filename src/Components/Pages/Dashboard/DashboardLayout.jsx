import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { CiMenuBurger } from "react-icons/ci";
const DashboardLayout = () => {
  return (
    // <div className="relative min-h-screen md:flex">
    //   {/* Sidebar */}
    //   <Sidebar></Sidebar>

    //   {/* Outlet Dynamic content */}
    //   <div className="flex-1 md:ml-32">
    //     <div className="p-5">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>

    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="text-black drawer-button">
          <div className="p-10">
            <CiMenuBurger className="w-9 h-9" />
          </div>
          <Outlet />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default DashboardLayout;
