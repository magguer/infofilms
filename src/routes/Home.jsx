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

  //Modal - false
  useEffect(() => {
    handleCloseFilmModal(false);
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
        />
      </div>
    </section>
  );
}

export default Home;
