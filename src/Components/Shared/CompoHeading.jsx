// eslint-disable-next-line react/prop-types
const CompoHeading = ({ normHeading, colorHeading }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-10">
        {normHeading} <span className="text-[#ffbe0b]">{colorHeading}</span>
      </h1>
    </div>
  );
};

export default CompoHeading;
