/* eslint-disable react/prop-types */
import {
  FaFacebook,
  FaHeadSideVirus,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { LiaDumbbellSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Trainer = ({ trainer }) => {
  const {
    _id,
    name,
    availableDay,
    availableTime,
    expertise,
    email,
    experience,
    category,
    bio,
    certification,
    pic,
  } = trainer;
  const shortBio = bio.split(".").splice(0, 2).join(".");

  // console.log(shortBio);
  // console.log(slots);
  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-72"
        src={pic}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-[#ffbe0b]">
        <LiaDumbbellSolid className="text-white w-8 h-8" />

        <h1 className="mx-3 text-lg font-semibold text-white">{expertise}</h1>
      </div>

      <div className="px-6 py-4">
        <hr className="mb-5 mt-5" />
        <div className="flex mb-4 items-center gap-x-3">
          <FaHeadSideVirus className="w-7 h-7" />
          <p className="text-lg font-semibold">
            {experience} {"Year's"} of Experience
          </p>
        </div>
        <hr className="" />
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h1>

        <p className="py-2 text-gray-700 h-40 dark:text-gray-400">{shortBio}</p>
        {/* <hr className="mb-3" /> */}
        {/* <h3 className="text-lg mb-2 font-semibold">Slots:</h3> */}
        {/* {
          // eslint-disable-next-line react/prop-types
          slots.map((slot, i) => (
            <p className="italic font-medium" key={i}>
              {slot}
            </p>
          ))
        } */}

        <hr className="my-5" />
        <div className="flex mb-4 justify-between items-center gap-x-3">
          <h3 className="text-lg mb-2 font-semibold">Social Links:</h3>
          <FaFacebook className="w-7 h-7 cursor-pointer hover:text-green-600" />
          <FaInstagram className="w-7 h-7 cursor-pointer hover:text-green-600" />
          <FaTwitterSquare className="w-7 h-7 cursor-pointer hover:text-green-600" />
        </div>
        <Link to={`/trainerDetails/${_id}`}>
          <button className="py-3 px-5 w-full rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trainer;
