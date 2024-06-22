import { useQuery } from "@tanstack/react-query";
import CompoHeading from "../../Shared/CompoHeading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Post from "./Post";
import useUser from "../../hooks/useUser";

const RecentPosts = () => {
  const axiosPublic = useAxiosPublic();
  const [posts, setPosts] = useState([]);
  const [userDetails] = useUser();

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

      <div className="mt-10 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {posts.slice(0, 6).map((post) => (
          <Post key={post._id} post={post} userDetails={userDetails}></Post>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
