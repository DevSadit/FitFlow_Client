import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ClassCard = ({ singleClass }) => {
  const [teachers, setTeachers] = useState([]);

  // distructuring the class
  const { picLink, category, description, classname } = singleClass;

  // distructuring the teachers
  const { name, _id, pic } = teachers;
  // console.log(pic);

  const axiosPublic = useAxiosPublic();
  //
  const { data: classTrainer = [] } = useQuery({
    queryKey: ["classTrainer", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classTrainer/${category}`);
      // console.log(res.data);
      return res.data;
    },
  });
  // console.log(classTrainer);
  // set the fetched data in usestae
  useEffect(() => {
    setTeachers(classTrainer);
  }, [classTrainer]);
  //
  const shortDescription = description.split(".").splice(0, 1).join(".");
  return (
    <>
      <div className="w-full md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <img className="p-8 mx-0 " src={picLink} alt="product image" />
        </div>
        <div className="px-4 pb-4 text-center">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {classname}
            </h5>
          </a>
          <div className="mt-2.5  mb-5">
            <p className="md:h-12">{shortDescription}</p>
          </div>
          <div>
            <h3 className="text-2xl text-left text-gray-900">
              Our {"Teacher's :"}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-gray-900 flex dark:text-white">
              {teachers.slice(0, 5).map((teacher) => (
                <Link key={teacher._id} to={`/trainerDetails/${teacher._id}`}>
                  <div className="w-8 h-8 mr-3 flex cursor-pointer rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      className="rounded-full"
                      src={teacher.pic}
                    />
                  </div>
                </Link>
              ))}
            </div>
            <a
              href="#"
              className="text-white bg-[#57CC99] hover:bg-[#296e50] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
