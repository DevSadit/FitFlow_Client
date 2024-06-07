import { useState } from "react";
import Certificateslot from "./Certificateslot";
import DaySlots from "./DaySlots";
import TimePicker from "./TimePicker";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const BeATrainer = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleBeaTrainer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const availableDay = selectedOption[0];
    const availableTime = value;
    const category = form.category.value;
    const email = form.email.value;
    const experience = form.experience.value;
    const certification = selectedCert;
    const bio = form.description.value;
    const role = "Pending";
    const photo = form.image.files[0];
    const formData = new FormData();

    formData.append("image", photo);

    let pic = ""; // Declare pic variable here

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      console.log(data.data.display_url);
      pic = data.data.display_url; // Assign pic here
    } catch (error) {
      console.log(error);
    }

    const userInfo = {
      name,
      availableDay,
      availableTime,
      expertise: category,
      email,
      experience,
      bio,
      certification,
      pic, 
      role,
    };
    // console.log(userInfo);

    // post the data to db
    const response = await axiosPublic.post("/trainers", userInfo);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You Applied Sucessfully!",
      text: "Wait For Admin Acceptance",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
    console.log(response);
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <h1 className="text-5xl font-bold mb-9">Be A Trainer !</h1>
      <form onSubmit={handleBeaTrainer}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* be a trainer */}
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Full Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#57cc99] focus:outline-[#57cc99] rounded-md "
                name="fullName"
                id="fullName"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-[#57cc99] focus:outline-[#57cc99]  rounded-md"
                name="category"
              >
                <option>Strength Training, Bodybuilding</option>
                <option>Yoga, Holistic Wellness</option>
                <option>HIIT, Athletic Training</option>
              </select>
            </div>

            <div className="space-y-1">
              <div>
                <label htmlFor="location" className="block text-gray-600">
                  Select Availability Day
                </label>
                <DaySlots
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                ></DaySlots>
              </div>
              <div className="">
                <label htmlFor="location" className="block text-gray-600 mt-8">
                  Select Availability Time
                </label>
                <TimePicker value={value} setValue={setValue}></TimePicker>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#57cc99] focus:outline-[#57cc99] rounded-md "
                name="email"
                id="email"
                type="text"
                placeholder="email"
                required
              />
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <span className="">Upload Your Profile Image</span>
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-[#57cc99] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#57cc99]">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              {/*  */}
              <div className="space-y-2 w-full text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Experience
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#57cc99] focus:outline-[#57cc99] rounded-md "
                  name="experience"
                  id="experience"
                  type="number"
                  placeholder="Provide Year"
                  required
                />
              </div>
            </div>

            <div className="w-full space-y-2">
              <span>Certification</span>
              <Certificateslot
                selectedCert={selectedCert}
                setSelectedCert={setSelectedCert}
              ></Certificateslot>
            </div>

            {/*  */}
          </div>
        </div>

        <div className="space-y-1 text-sm w-full">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>

          <textarea
            id="description"
            className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border  border-[#57cc99] focus:outline-[#57cc99]"
            name="description"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#57cc99] hover:bg-green-800"
        />
      </form>
    </div>
  );
};

export default BeATrainer;
