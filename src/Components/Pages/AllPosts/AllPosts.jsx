import { useEffect, useState } from "react";
import CompoHeading from "../../Shared/CompoHeading";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import "../../../../src/button.css";
import { useQuery } from "@tanstack/react-query";
import Post from "../Home/Post";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const AllPosts = () => {
  const axiosPublic = useAxiosPublic();
  
  // looping the card based on posts
  const [posts, setPosts] = useState([]); 
  
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  // fetched the data using tenstack query
  const { data: psts = [], isLoading } = useQuery({
    queryKey: ["psts", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/posts?page=${currentPage}&size=${itemsPerPage}`
      );
      // console.log(res.data);
      return res.data;
    },
  });

  // set the fetched data in usestae
  useEffect(() => {
    setPosts(psts);
  }, [psts]);

  // load the data 
  if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }
  // handle previous page button
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  //   //   handle next page button
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="my-12">
      <CompoHeading
        normHeading={`Latest`}
        colorHeading={`Post's`}
      ></CompoHeading>

      <div className="mt-10 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
      <div className="text-center my-10 space-x-8">
        {/* pagination */}
        
        <button onClick={handlePrevPage} className="join-item btn btn-outline">
          Previous page
        </button>
        {pages.map((page, i) => (
          <button
            className={currentPage === page && `selected-btn btn`}
            onClick={() => setCurrentPage(page)}
            key={i}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="join-item btn btn-outline">
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
