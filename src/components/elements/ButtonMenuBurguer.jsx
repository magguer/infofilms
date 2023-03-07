import { Link } from "react-router-dom";

function ButtonMenuBurguer({ text, path, blanck }) {
  return (
    <Link to={path} target={blanck && "_blank"}>
      <div className="w-[300px] flex justify-center items-center border-b-2 border-gray-800 py-8 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-150">
        <h2 className="font-semibold">{text}</h2>
      </div>
    </Link>
  );
}

export default ButtonMenuBurguer;
