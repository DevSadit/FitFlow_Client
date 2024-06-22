import { useEffect, useRef, useState } from "react";
import CompoHeading from "../../Shared/CompoHeading";
import useAllClasses from "../../hooks/useAllClasses";
import ClassCard from "./ClassCard";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const AllClasses = () => {
  // const [ classes, isLoading] = useAllClasses();

  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const { count } = useLoaderData();

  //
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);
  const [classes, isLoading] = useAllClasses(currentPage, itemsPerPage);
  //

  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log("Clicked outside:", event.target); // Debugging log
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // console.log("Clearing input field"); // Debugging log
        setSearch("");
        inputRef.current.value = "";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
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
      <CompoHeading normHeading={`All`} colorHeading={`Classes`}></CompoHeading>
      <div className="my-12 w-full px-4">
        <br />
        <form onChange={(e) => setSearch(e.target.value)}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="text"
              className="grow"
              placeholder="Search"
              ref={inputRef}
            />
            <button type="Submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </form>
      </div>
      <div className="grid md:grid-cols-2 mx-0 lg:mx-4 lg:grid-cols-3 grid-cols-1 lg:gap-x-40 lg:gap-y-20 gap-10 mt-10">
        {classes
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.classname.toLowerCase().includes(search);
          })
          .map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassCard>
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

export default AllClasses;

// /////
// {
//   classes.map((singleClass) => (
//     <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>
//   ));
// }
