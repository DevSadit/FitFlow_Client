import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  const {
    _id,
    title,
    author_name,
    author_location,
    author_img,
    short_description,
    long_description,
    publish_time,
  } = post;
  return (
    <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={author_img}
        />
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
        {short_description}
      </p>
        <Link className="text-blue-600 hover:underline font-bold">View Full</Link>

      <div className="flex justify-end mt-4">
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
