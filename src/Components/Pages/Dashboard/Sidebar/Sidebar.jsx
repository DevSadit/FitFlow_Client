import { FaHome, FaInbox, FaLine } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AdminMenuList from "../AdminMenuList/AdminMenuList";
import MemberMenuList from "../MemberMenuList/MemberMenuList";
import TrainerMenuList from "../TrainerMenuList/TrainerMenuList";
import useRole from "../../../hooks/useRole";
import { SlLogout } from "react-icons/sl";
import useAuthContext from "../../../hooks/useAuthContext";

const Sidebar = () => {
  const [role, isLoading] = useRole();
  const { logOut } = useAuthContext();
  // console.log(role);
  const isAdmin = false;
  const isMember = false;
  const isTrainer = false;
  return (
    <div className="w-72 px-2 min-h-screen bg-[#21BDCE]">
      <h1 className="text-5xl text-center font-bold mt-7">Fit Flow</h1>
      {role === "Admin" && <AdminMenuList></AdminMenuList>}
      {role === "member" && <MemberMenuList></MemberMenuList>}
      {role === "Trainer" && <TrainerMenuList></TrainerMenuList>}
      <div className="divider "></div>
      <ul className="menu ">
        <li>
          <NavLink className="uppercase" to="/">
            <FaHome />
            Home
          </NavLink>
        </li>
        <li>
          <button onClick={logOut}>
            <SlLogout />
            LogOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
