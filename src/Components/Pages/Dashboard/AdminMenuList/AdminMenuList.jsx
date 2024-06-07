import { FaAddressBook, FaRegUser, FaUtensils } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const AdminMenuList = () => {
  return (
    <div>
      <ul className="menu space-y-3 mt-12 text-white font-semibold">
        <li>
          <NavLink className="uppercase" to="/dashboard/newsletter-subsc">
            <FaUtensils />
            Newsletter subscribers
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/all-trainers">
            <HiOutlineMenu />
            All Trainers
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/applied-trainers">
            <FaAddressBook />
            Applied Trainers
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/ballance">
            <FaRegUser />
            Balance
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/add-clases">
            <FaRegUser />
            Add new Class
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenuList;
