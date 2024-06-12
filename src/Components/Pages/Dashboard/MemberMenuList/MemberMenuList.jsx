import { FaCalendar, FaDAndD, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const MemberMenuList = () => {
  return (
    <div>
      <ul className="menu space-y-3 text-white font-semibold mt-12">
        <li>
          <NavLink className="uppercase" to="/dashboard/profile">
            <FaHome />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/apliedTrainers">
            <FaCalendar />
            Activity Log
          </NavLink>
        </li>
        <li>
          <NavLink className="uppercase" to="/dashboard/reco-classes">
            <FaDAndD />
            Recommended Classes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MemberMenuList;
