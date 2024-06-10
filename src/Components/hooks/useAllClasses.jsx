import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllClasses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: cls = [] } = useQuery({
    queryKey: ["cls"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes");
      // console.log(res.data);
      return res.data;
    },
  });

  return cls;
};

export default useAllClasses;
