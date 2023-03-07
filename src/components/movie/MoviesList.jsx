//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Dependencias
import { useEffect, useState } from "react";
import axios from "axios";
//Componentes
import ReactStars from "react-rating-stars-component";
import InfiniteScroll from "react-infinite-scroll-component";
import Slider from "react-slick";
import Spinner from "../elements/Spinner";
import MovieModal from "./MovieModal";
import MovieCard from "./MovieCard";

function MoviesList({
  showModal,
  filmModal,
  handleFilmModal,
  handleCloseFilmModal,
  genreId,
  genres,
  setGenreId,
}) {
  const [films, setFilms] = useState(null);
  const [star, setStar] = useState(7);
  const [page, setPage] = useState(1);

  /*   Axio for Ranking */
  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_average.gte=${star}&with_genres=${genreId}`
      );
      setFilms(response.data.results);
    };
    getFilms();
  }, [star]);

  /*   Axio for Genere */
  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_average.gte=${star}&with_genres=${genreId}`
      );
      setFilms(response.data.results);
    };
    getFilms();
  }, [genreId]);

  /*   Axio for InfiniteScroll */
  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&vote_average.gte=${star}&with_genres=${genreId}`
      );
      if (films !== null) {
        setFilms([...films, ...response.data.results]);
      }
    };
    getFilms();
  }, [page]);

  /*   Next Page Function */
  const nextFilms = () => {
    setPage((prevCount) => prevCount + 1);
  };

  /*   Rate Films Function */
  const ratinFilmsList = (value) => {
    setStar(value * 2 - 2);
  };

  /*   Config Slider de Generos */
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/*     Modal Movie Info */}
      <div className="z-20">
        {showModal && (
          <MovieModal
            handleCloseFilmModal={handleCloseFilmModal}
            filmModal={filmModal}
          />
        )}
      </div>
      {/*       Spinner null Movies */}
      {films === null ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {/*           Ratin Component */}
          <div className="flex justify-center tablet:justify-end pt-24 tablet:mr-10">
            <ReactStars
              value={3}
              char={"☆"}
              count={5}
              onChange={(value) => ratinFilmsList(value)}
              size={24}
              initial={star}
              activeColor="#1f2937"
              classNames="border-2 pb-1 border-gray-800 px-4 rounded-full m-0"
            />
          </div>
          {/*       Slider Generos de Películas */}
          <div className="px-14 my-5 mb-10">
            {genres === null ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              <Slider {...settings}>
                {genres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="text-white px-2"
                      onClick={() => setGenreId(genre.id)}
                    >
                      <div
                        className={`${
                          genre.id === genreId && "bg-gray-700"
                        } border-2 hover:bg-gray-700 border-gray-800 cursor-pointer text-center rounded-full transition-all duration-200`}
                      >
                        {genre.name}
                      </div>
                    </div>
                  );
                })}
              </Slider>
            )}
          </div>
          {/*      Scroll Infinito */}
          <InfiniteScroll
            dataLength={films.length}
            next={nextFilms}
            hasMore={true}
          >
            <ul className="z-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-10 place-content-center items-center my-5 mx-5">
              {films.map((film) => {
                return (
                  <li key={film.id} onClick={() => handleFilmModal(film)}>
                    <MovieCard film={film} />
                  </li>
                );
              })}
            </ul>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}

export default MoviesList;
