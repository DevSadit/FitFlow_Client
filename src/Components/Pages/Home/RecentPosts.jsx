import { useQuery } from "@tanstack/react-query";
import CompoHeading from "../../Shared/CompoHeading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Post from "./Post";

const RecentPosts = () => {
  const axiosPublic = useAxiosPublic();
  const [posts, setPosts] = useState([]);

  // fetched the data using tenstack query
  const { data: psts = [] } = useQuery({
    queryKey: ["psts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts`);
      //   console.log(res.data);
      return res.data;
    },
  });

  // set the fetched data in usestae
  useEffect(() => {
    setPosts(psts);
  }, [psts]);

  return (
    <div className="my-12">
      <CompoHeading
        normHeading={`Latest`}
        colorHeading={`Post's`}
      ></CompoHeading>
      <p>{posts.length}</p>

      <div className="mt-10 gap-10 grid grid-cols-3">
        {posts.map((post) => (
         <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
