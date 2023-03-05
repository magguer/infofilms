const ButtonHeader = ({ imgButton }) => {
  return (
    <>
      <a
        href="/"
        className="flex justify-center rounded items-center h-[40px] font-semibold text-white w-full px-3 bg-gray-600 hover:bg-gray-700 translate-all duration-150"
      >
        {imgButton}
      </a>
    </>
  );
};
export default ButtonHeader;
