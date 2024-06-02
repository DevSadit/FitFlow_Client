import { useQuery } from "@tanstack/react-query";
import CompoHeading from "../../Shared/CompoHeading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Trainer from "./Trainer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const OurTrainers = () => {
  const axiosPublic = useAxiosPublic();
  const [trainers, setTrainers] = useState([]);
  // fetched the trainers data using tenstack
  const { data: trainer = [] } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers`);
      // console.log(res.data);
      return res.data;
    },
  });

  // set the fetched data in usestae
  useEffect(() => {
    setTrainers(trainer);
  }, [trainer]);

  return (
    <div>
      <CompoHeading
        normHeading={`Our`}
        colorHeading={`Trainers`}
      ></CompoHeading>
      <p>{trainers.length}</p>
      <div className="grid lg:grid-cols-3 lg:gap-28">
        {trainers.map((trainer) => (
          <Trainer key={trainer._id} trainer={trainer}></Trainer>
        ))}
      </div>
      <div className="right-44 absolute hover:underline mt-5">
        <Link className="font-semibold text-blue-500 italic  flex items-center gap-x-3">
          View All Trainers
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default OurTrainers;
