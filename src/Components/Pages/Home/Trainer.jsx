import { LiaDumbbellSolid } from "react-icons/lia";

const Trainer = ({trainer}) => {
    const {_id, name, bio, expertise, photo} = trainer;
    return (
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-72"
          src={photo}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-[#ffbe0b]">
          <LiaDumbbellSolid className="text-white w-8 h-8" />

          <h1 className="mx-3 text-lg font-semibold text-white">{expertise}</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h1>

          <p className="py-2 text-gray-700 h-96 dark:text-gray-400">{bio}</p>

          <button className="py-3 px-5 rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-700">Book Now</button>
        </div>
      </div>
    );
};

export default Trainer;