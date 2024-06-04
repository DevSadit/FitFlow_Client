import { useQuery } from "@tanstack/react-query";
import CompoHeading from "../../Shared/CompoHeading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Trainer from "../Home/Trainer";

const AllTrainers = () => {
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

//   console.log(trainers);
  return (
    <div className="mt-12">
      <CompoHeading
        normHeading={`Look At Our All`}
        colorHeading={`Trainer's`}
      ></CompoHeading>
      <div className="grid lg:grid-cols-3 lg:gap-28 mt-10">
        {trainers.map((trainer) => (
          <Trainer key={trainer._id} trainer={trainer}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default AllTrainers;
