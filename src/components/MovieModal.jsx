import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function MovieModal({ handleCloseFilmModal, filmIdModal }) {
  const [filmModal, setFilmModal] = useState(null);

  useEffect(() => {
    const getFilmModal = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmIdModal}?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US`
      );
      setFilmModal(response.data);
    };
    getFilmModal();
  }, [filmModal]);

  return (
    <div className="fixed inset-0">
      <div className="modal-flex-container flex items-center justify-center min-h-screen text-center">
        <div
          className="modal-bg-container fixed inset-0 bg-black bg-opacity-80"
          onClick={handleCloseFilmModal}
        ></div>
        {filmModal === null ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="modal-container inline-block mt-20 align-bottom bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500">
            <div className="self-end flex p-7 text-white">
              <img
                className="w-55 h-96 rounded"
                src={`https://image.tmdb.org/t/p/w500/${filmModal.poster_path}`}
                alt=""
              />
              <div className="text-center mx-10">
                <h2 className=" my-5 font-bold">{filmModal.title}</h2>
                <p className="max-w-[400px]">{filmModal.overview}</p>
              </div>
              {/* 
              <button
                className="h-6 w-6 flex border border-white justify-center rounded-full text-sm"
                onClick={handleCloseFilmModal}
              >
                x
              </button> */}
            </div>

            <div className="modal-wrapper">
              <div className="modal-wrapper-flex"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
