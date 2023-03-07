//Dependencias
import { useEffect, useRef, useState } from "react";
import axios from "axios";
//Componentes
import MoviesList from "../components/movie/MoviesList";
import Hero from "../components/elements/Hero";

function Home({
  showModal,
  setShowModal,
  setFilmModal,
  filmModal,
  handleCloseFilmModal,
  handleFilmModal,
}) {
  const movieList = useRef(null);
  const [genreId, setGenreId] = useState(28);
  const [genres, setGenres] = useState(null);

  //Modal - false
  useEffect(() => {
    handleCloseFilmModal(false);
  }, []);

  // Axio - Generos de Películas
  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US`
      );
      setGenres(response.data.genres);
    };
    getGenres();
  }, []);

  /*   Scroll to movieList */
  const handleScrollHome = () => {
    movieList.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      {/* Hero */}
      <div className="hero">
        <Hero handleScrollHome={handleScrollHome} />
      </div>

      {/*       MovieLlist */}
      <div ref={movieList}>
        <MoviesList
          showModal={showModal}
          setShowModal={setShowModal}
          setFilmModal={setFilmModal}
          filmModal={filmModal}
          handleCloseFilmModal={handleCloseFilmModal}
          handleFilmModal={handleFilmModal}
          genreId={genreId}
          genres={genres}
          setGenreId={setGenreId}
        />
      </div>
    </section>
  );
}

export default Home;
