/* CSS */
import "../../animations/ModalAn.css";
/* Dependencias */
import { Link } from "react-router-dom";
/* Componentes */
import Spinner from "../elements/Spinner";

function MovieModal({ handleCloseFilmModal, filmModal }) {
  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseFilmModal();
    }
  });

  return (
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-80 cursor-pointer"
          onClick={handleCloseFilmModal}
        ></div>
        {filmModal === null ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="inline-block tablet:mt-20 align-bottom bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 modal">
            <button
              className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border-2 border-gray-300 bg-gray-800 hover:bg-gray-700 justify-center rounded-full text-sm translate-all duration-150"
              onClick={handleCloseFilmModal}
            ></button>

            <div className="self-end flex text-white">
              <img
                className="hidden tablet:flex w-64 desktop:w-80 object-contain rounded-l"
                src={`https://image.tmdb.org/t/p/w500/${filmModal.poster_path}`}
                alt=""
              />
              <div className="flex flex-col items-end pb-5 justify-between">
                <div className="items-center flex flex-col mt-5 mx-10 ">
                  <div className="flex gap-3 items-baseline">
                    <h2 className="font-bold text-2xl max-w-[300px]">
                      {filmModal.title}
                    </h2>
                    <span className="text-[12px]">
                      {filmModal.vote_average}
                    </span>
                  </div>
                  <div className="w-full my-3 h-[1px] bg-gray-900 rounded"></div>
                  <p className="max-w-[400px] max-h-[195px] text-start overflow-hidden">
                    {filmModal.overview}
                  </p>
                </div>
                <div className="flex gap-3 mx-5 mt-10 tablet:mt-0">
                  <Link
                    to={`/movie/${filmModal.id}`}
                    className="text-white font-semibold translate-all duration-150 hover:bg-gray-600 bg-gray-700 px-3 py-1 text-lg rounded"
                  >
                    Saber más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
