import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users, Star, ArrowRight } from "lucide-react";

/* eslint-disable react/prop-types */
const ClassCard = ({ singleClass }) => {
  const [teachers, setTeachers] = useState([]);

  // destructuring the class
  const { picLink, category, description, classname } = singleClass;

  const axiosPublic = useAxiosPublic();

  const { data: classTrainer = [] } = useQuery({
    queryKey: ["classTrainer", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classTrainer/${category}`);
      return res.data;
    },
  });

  // set the fetched data in useState
  useEffect(() => {
    setTeachers(classTrainer);
  }, [classTrainer]);

  return (
    <div className="group relative w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={picLink}
            alt={classname}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1AAE51] text-white shadow-lg">
            {category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#1AAE51] transition-colors duration-200 line-clamp-2">
            {classname}
          </h3>
        </div>

        {/* Teachers Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            <Users size={16} />
            <span>Expert Instructors</span>
          </div>

          {/* Teacher Avatars */}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {teachers.slice(0, 4).map((teacher, index) => (
                <Link key={teacher._id} to={`/trainerDetails/${teacher._id}`}>
                  <div className="relative group/avatar">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 hover:border-[#1AAE51] transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-110 transform transition-transform duration-200"
                      src={teacher.pic}
                      alt={teacher.name}
                    />
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {teacher.name}
                    </div>
                  </div>
                </Link>
              ))}
              {teachers.length > 4 && (
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    +{teachers.length - 4}
                  </span>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                4.9
              </span>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <div className="pt-2">
          <button className="w-full bg-[#1AAE51] hover:bg-[#158a41] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl">
            <span>Join Class</span>
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1AAE51]/20 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ClassCard;
