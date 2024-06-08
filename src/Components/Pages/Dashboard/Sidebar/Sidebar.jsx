import { FaHome, FaInbox, FaLine } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AdminMenuList from "../AdminMenuList/AdminMenuList";
import MemberMenuList from "../MemberMenuList/MemberMenuList";
import TrainerMenuList from "../TrainerMenuList/TrainerMenuList";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const [role, isLoading] = useRole();
  // console.log(role);
  const isAdmin = false;
  const isMember = false;
  const isTrainer = false;
  return (
    <div className="w-72 px-2 min-h-screen bg-[#21BDCE]">
      <h1 className="text-5xl text-center font-bold mt-7">Fit Flow</h1>
      {role === "Admin" && <AdminMenuList></AdminMenuList>}
      {role === "member" && <MemberMenuList></MemberMenuList>}
      {role === "trainer" && <TrainerMenuList></TrainerMenuList>}
      <div className="divider "></div>
      <ul className="menu ">
        <li>
          <NavLink className="uppercase" to="/">
            <FaHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/">
            <FaLine />
            menu
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/">
            <FaShop />
            shop
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/">
            <FaInbox />
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
