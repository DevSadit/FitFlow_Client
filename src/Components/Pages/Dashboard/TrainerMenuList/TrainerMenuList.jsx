import { FaHome, FaUtensils } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const TrainerMenuList = () => {
  return (
    <div>
      <ul className="menu space-y-3 mt-12 text-white font-semibold">
        <li>
          <NavLink
            to="/dashboard/manage-slots"
            className="uppercase"
          >
            <FaHome />
            Manage Slots
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/add-slots">
            <FaUtensils />
            Add New Slots
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/add-post">
            <HiOutlineMenu />
            Add New Forum
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TrainerMenuList;
