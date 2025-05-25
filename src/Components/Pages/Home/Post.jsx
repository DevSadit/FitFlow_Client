import { Link } from "react-router-dom";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuthContext from "../../hooks/useAuthContext";
import { Clock, MapPin, Eye, TrendingUp } from "lucide-react";

/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [downvotes, setDownvotes] = useState(post.downvotes);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuthContext();

  // destructuring prop 1
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

  // Format publish time (keeping original functionality)
  // const formatTime = (time) => {
  //   const date = new Date(time);
  //   return date.toLocaleDateString();
  // };

  return (
    <div className="group relative w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
      {/* Header with Author Info */}
      <div className="relative p-6 pb-4 flex-shrink-0">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="w-full h-full bg-[#1AAE51] rounded-full transform translate-x-16 -translate-y-16"></div>
        </div>
        
        <div className="relative flex items-start gap-4">
          {/* Author Avatar */}
          <div className="relative flex-shrink-0">
            <img
              className="w-14 h-14 rounded-full border-3 border-[#1AAE51]/20 shadow-lg object-cover"
              src={author_img}
              alt={author_name}
            />
            {/* Role Badge */}
            <div className="absolute -bottom-1 -right-1 bg-[#1AAE51] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
              {role}
            </div>
          </div>

          {/* Author Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                {author_name}
              </h4>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={12} />
                <span>{author_location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <Clock size={12} />
              <span>{publish_time}</span>
            </div>
          </div>

          {/* Trending Icon */}
          <div className="flex-shrink-0">
            <div className="p-2 bg-[#1AAE51]/10 rounded-full">
              <TrendingUp size={16} className="text-[#1AAE51]" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6 space-y-4 flex-1 flex flex-col">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#1AAE51] transition-colors duration-200 line-clamp-2 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1">
          {short_description}
        </p>

        {/* View Full Link */}
        <div className="mt-auto">
          <Link 
            className="inline-flex items-center gap-2 text-[#1AAE51] hover:text-[#158a41] font-semibold text-sm transition-colors duration-200 group/link"
          >
            <Eye size={16} />
            <span>View Full</span>
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>

      {/* Footer with Voting */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex-shrink-0 mt-auto">
        <div className="flex items-center justify-between">
          {/* Voting Section */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm overflow-hidden">
            {/* Upvote */}
            <button
              onClick={() => handleVote("upvote")}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#1AAE51]/10 transition-colors duration-200 group/upvote"
            >
              <BiSolidUpvote className="text-[#1AAE51] group-hover/upvote:scale-110 transition-transform duration-200" size={18} />
              <span className="font-medium text-gray-700 dark:text-gray-300">{upvotes}</span>
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-600"></div>

            {/* Downvote */}
            <button
              onClick={() => handleVote("downvote")}
              className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group/downvote"
            >
              <BiSolidDownvote className="text-red-500 group-hover/downvote:scale-110 transition-transform duration-200" size={18} />
              <span className="font-medium text-gray-700 dark:text-gray-300">{downvotes}</span>
            </button>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#"
              className="text-lg font-medium text-[#1AAE51] hover:text-[#158a41] transition-colors duration-200"
              role="link"
            >
              {author_name}
            </a>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1AAE51]/20 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Post;