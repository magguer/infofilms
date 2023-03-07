import { Link } from "react-router-dom";
import ButtonIconBurguer from "./ButtonIconBurguer";

const Header = ({
  setShowBurguerMenu,
  showBurguerMenu,
  setSearchWords,
  isOnline,
}) => {
  return (
    <>
      <div className="flex items-center px-4 tablet:px-10 h-[70px] w-sceen bg-gray-800 bg-opacity-95">
        <div className=" flex items-center gap-4 z-10">
          <div>
            <ButtonIconBurguer
              showBurguerMenu={showBurguerMenu}
              setShowBurguerMenu={setShowBurguerMenu}
            />
          </div>
        </div>
        <div className="w-full absolute items-center flex justify-end right-4 tablet:right-0 tablet:justify-center">
          <form
            action="/search"
            className="bg-gray-900 rounded-lg flex items-center"
          >
            <input
              className="rounded-lg bg-gray-900 w-[190px] tablet:w-[300px] laptop:w-[400px] text-white px-3 h-[35px]"
              placeholder="Buscar por título de película"
              type="text"
              id="movie"
              onChange={(e) => {
                setSearchWords(e.target.value);
              }}
            />
            <Link to={`/search`}>
              <div className="rounded cursor-pointer transition-colors duration-150">
                <img
                  className="w-5 mx-2"
                  src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-17.jpg"
                  alt=""
                />
              </div>
            </Link>
          </form>
        </div>
        <div className="flex justify-end w-full">
          {isOnline ? null : (
            <div className="text-white">Estas desconectado</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
