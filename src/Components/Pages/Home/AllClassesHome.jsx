import { useLoaderData } from "react-router-dom";
import useAllClasses from "../../hooks/useAllClasses";
import CompoHeading from "../../Shared/CompoHeading";
import ClassCard from "../AllClasses/ClassCard";

const AllClassesHome = () => {
  const [classes, isLoading] = useAllClasses();

  //


  return (
    <div className="my-12">
      <CompoHeading normHeading={`All`} colorHeading={`Classes`}></CompoHeading>
      <div className="my-12 w-full px-4">
        <br />
      </div>
      <div className="grid md:grid-cols-2 mx-0 lg:mx-4 lg:grid-cols-3 grid-cols-1 lg:gap-x-40 lg:gap-y-20 gap-10 mt-10">
        {classes.slice(0, 6).map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassCard>
          ))}
      </div>
    </div>
  );
};

export default AllClassesHome;

// /////
// {
//   classes.map((singleClass) => (
//     <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>
//   ));
// }
