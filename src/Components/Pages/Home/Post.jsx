import { Link } from "react-router-dom";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import toast from "react-hot-toast";
import useAuthContext from "../../hooks/useAuthContext";
/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [downvotes, setDownvotes] = useState(post.downvotes);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuthContext();
  // distructuring prop 1
  const {
    _id,
    title,
    author_name,
    author_location,
    author_img,
    short_description,
    long_description,
    publish_time,
    role,
  } = post;
  // distructuring prop 2
  // const { _id: userId } = userDetails;

  // handle vote
  const handleVote = async (type) => {
    const url = `/posts/${post._id}/${type}`;

    try {
      if (user) {
        await axiosPublic.post(url);
        if (type === "upvote") {
          setUpvotes(upvotes + 1);
        } else {
          setDownvotes(downvotes + 1);
        }
      } else {
        toast.error("Please Login First");
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };


  return (
    <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="relative flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={author_img}
        />
        <span className="absolute -bottom-3 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white z-10 text-xs font-bold px-2 py-1 rounded-full">
          {role}
        </span>
      </div>

      <h2 className="mt-2 h-14 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        {title}
      </h2>

      <p className="mt-2 h-10 text-sm text-gray-600 dark:text-gray-200">
        {short_description}
      </p>
      <Link className="text-blue-600 hover:underline font-bold">View Full</Link>

      <div className="flex  justify-between mt-4">
        <div className="border border-blue-600 flex items-center justify-between gap-x-4 rounded-xl p-2">
          <div
            onClick={() => handleVote("upvote")}
            className="flex items-center gap-x-2"
          >
            <BiSolidUpvote />
            <p>{upvotes}</p>
          </div>
          <div className="border-blue-600 border-r-4 h-5"></div>
          <div
            onClick={() => handleVote("downvote")}
            className="flex items-center gap-x-2"
          >
            <BiSolidDownvote />
            <p>{downvotes}</p>
          </div>
        </div>
        <a
          href="#"
          className="text-lg font-medium text-blue-600 dark:text-blue-300"
          role="link"
        >
          {author_name}
        </a>
      </div>
    </div>
  );
};

export default Post;
