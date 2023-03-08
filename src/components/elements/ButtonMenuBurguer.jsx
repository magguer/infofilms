import { Link } from "react-router-dom";

function ButtonMenuBurguer({ text, path, blanck, img }) {
  return (
    <Link to={path} target={blanck ? "_blank" : null}>
      <div className="flex items-center">
        <div className="w-[300px] flex justify-between items-center border-b-2 border-gray-800 py-8 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-150">
          <img className="ml-5 w-8" src={img} alt="" />
          <div className="flex justify-center w-full">
            <h2 className="font-semibold">{text}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ButtonMenuBurguer;
