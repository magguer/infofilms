import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";

function MoviesList({ films, star }) {
  const [moreFilms, setMoreFilms] = useState([]);
  const [nextCount, setNextCount] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [filmIdModal, setFilmIdModal] = useState("");

  const getMoreFilms = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${nextCount}&with_watch_monetization_types=flatrate&vote_average.gte=${star}`
    );
    setNextCount(nextCount + 1);
    setMoreFilms([...moreFilms, ...response.data.results]);
  };

  /*   Modal Handlers */
  const handleFilmModal = (filmId) => {
    setFilmIdModal(filmId);
    setShowModal(true);
  };
  const handleCloseFilmModal = () => setShowModal(false);

  return (
    <>
      {/*     Modal Movie Info */}
      {showModal && (
        <MovieModal
          handleCloseFilmModal={handleCloseFilmModal}
          filmIdModal={filmIdModal}
        />
      )}

      <ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 place-content-center items-center my-5 mx-5">
        {films.map((film) => {
          return (
            <li key={film.id} onClick={() => handleFilmModal(film.id)}>
              <MovieCard film={film} />
            </li>
          );
        })}
      </ul>
      {/*      Scroll Infinito */}
      <InfiniteScroll
        dataLength={moreFilms.length}
        next={getMoreFilms}
        hasMore={true}
        loader={<h4 className="text-center text-white w-full">Loading...</h4>}
      >
        <ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 place-content-center items-center my-5 mx-5">
          {moreFilms.map((moreFilm) => {
            return (
              <li
                key={moreFilm.id}
                onClick={() => handleFilmModal(moreFilm.id)}
              >
                <MovieCard film={moreFilm} />
              </li>
            );
          })}
        </ul>
      </InfiniteScroll>
    </>
  );
}

export default MoviesList;
