//Dependencias
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/elements/Spinner";
//Componentes
import MovieCard from "../components/movie/MovieCard";
import MovieModal from "../components/movie/MovieModal";

function SearchMovieRoute({
  searchWords,
  showModal,
  filmModal,
  handleCloseFilmModal,
  handleFilmModal,
}) {
  const [searchedFilms, setSearchedFilms] = useState(null);

  useEffect(() => {
    const getSearch = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/search/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&query=${searchWords}&page=1&include_adult=false`,
      });
      setSearchedFilms(response.data.results);
    };
    getSearch();
  }, [searchWords]);

  useEffect(() => {
    handleCloseFilmModal(false);
  }, []);

  return (
    <>
      {/*     Modal Movie Info */}
      {showModal && (
        <MovieModal
          handleCloseFilmModal={handleCloseFilmModal}
          filmModal={filmModal}
        />
      )}
      {searchedFilms !== null ? (
        <div>
          {searchedFilms.length !== 0 ? (
            <div>
              <ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 place-content-center items-center mt-5 mx-5">
                {searchedFilms.map((film) => {
                  return (
                    <li key={film.id} onClick={() => handleFilmModal(film)}>
                      <MovieCard film={film} />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="text-white text-3xl font-bold flex h-[30vw] justify-center items-center">
              <h2>No existen peliculas con ese nombre. 🤔</h2>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default SearchMovieRoute;
