import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ClassCard = ({ singleClass }) => {
    const [teachers, setTeachers] = useState([]);
    const { picLink, category, description, classname } = singleClass;
const axiosPublic = useAxiosPublic();
    // 
      const { data: classTrainer = [], refetch } = useQuery({
        queryKey: ["classTrainer"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/classTrainer/${category}`);
          // console.log(res.data);
          return res.data;
        },
      });

      // set the fetched data in usestae
      useEffect(() => {
        setTeachers(classTrainer);
      }, [classTrainer]);
    // 
    const shortDescription = description.split(".").splice(0, 1).join(".");
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 h-96 mx-auto" src={picLink} alt="product image" />
        </a>
        <div className="px-5 pb-5 text-center">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {classname}
            </h5>
          </a>
          <div className="mt-2.5  mb-5">
            <p>{shortDescription}</p>
          </div>
          <div>
            <h3 className="text-2xl text-left font-bold text-gray-900">
              Our {"Teacher's :"} {teachers.name}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
