const ButtonIconBurguer = ({ setShowBurguerMenu, showBurguerMenu }) => {
  return (
    <>
      <button
        onClick={() => setShowBurguerMenu(!showBurguerMenu)}
        className="text-white bg-gray-900 hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-gray-900 space-y-1.5 cursor-pointer  transition-color duration-200 p-2 rounded-md border-2 border-gray-700"
      >
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
      </button>
    </>
  );
};
export default ButtonIconBurguer;
