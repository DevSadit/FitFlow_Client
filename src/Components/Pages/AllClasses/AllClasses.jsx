import CompoHeading from "../../Shared/CompoHeading";
import useAllClasses from "../../hooks/useAllClasses";
import ClassCard from "./ClassCard";

const AllClasses = () => {
  const classes = useAllClasses();
  // console.log(classes);
  return (
    <div className="my-12">
      <CompoHeading normHeading={`All`} colorHeading={`Classes`}></CompoHeading>
      <div className="grid md:grid-cols-2 mx-0 lg:mx-4 lg:grid-cols-3 grid-cols-1 lg:gap-x-40 lg:gap-y-20 gap-10 mt-10">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
