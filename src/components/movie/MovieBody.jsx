import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
//Components
import Spinner from "../elements/Spinner";

import "../../animations/MovieBodyAn.css";

function MovieBody({ movieId }) {
  const [filmInfo, setFilmInfo] = useState(null);

  useEffect(() => {
    const getFilmInfo = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US`
      );
      setFilmInfo(response.data);
    };
    getFilmInfo();
  }, [movieId]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  /*   const searchedFilms = useApi(
    `/movie/${movieId}?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US`,
    response.data
  ); */

  return (
    <div className="relative h-[70vh] desktop:h-[92.2vh]">
      {filmInfo === null ? (
        <div className="flex justify-center h-[87.8vh] items-center">
          <Spinner />
        </div>
      ) : (
        <div className="h-[87.8vh] desktop:h-[92.2vh]">
          <div className="ml-0 tablet:ml-80 absolute tablet:bg-gradient-to-r from-[#17202e] to-transparent h-[87.8vh] desktop:h-[92.2vh] w-full tablet:w-6/12 z-10 "></div>
          {/*       Back Button */}
          <div
            className="absolute left-7 z-20 top-6 rotate-90 cursor-pointer hover:left-6 transition-all duration-200"
            onClick={goBack}
          >
            <img
              className="w-8 h-8 opacity-70  "
              src="/arrows1.png"
              alt="arrow"
            />
          </div>
          {/*               Web */}
          <div className="absolute right-6 top-6 ">
            {filmInfo.homepage && (
              <a
                href={filmInfo.homepage}
                rel="noreferrer"
                target="_blank"
                className="hover:bg-gray-800 text-white px-2 py-1 rounded bg-gray-700 transition-all duration-150"
              >
                Página web
              </a>
            )}
          </div>
          {/*           InfoFilmFull */}
          <div className="absolute mt-20 tablet:mt-10  tablet:ml-28 z-20 max-w-[500px] text-white movie-body-img px-8 tablet:px-0">
            {/*           InfoFilm1 */}
            <div className="text-center tablet:text-start">
              <h2 className="text-white font-bold text-3xl tablet:text-5xl">
                {filmInfo.title}
              </h2>
              <p className="text-gray-400 text-basic mt-5 max-h-[160px] desktop:max-h-[500px] overflow-hidden scrollbar-none scrollbar-thin">
                {filmInfo.overview}
              </p>
              <div className="justify-center tablet:justify-start flex gap-3 mt-5">
                {filmInfo.genres.map((genere) => {
                  return (
                    <span
                      className="border px-3 rounded-full text-sm cursor-default transition-all duration-150"
                      key={genere.id}
                    >
                      <p>{genere.name}</p>
                    </span>
                  );
                })}
              </div>
            </div>

            {/*            InfoFilm2 */}
            <div className="flex flex-col mt-5 gap-3">
              <div className="items-center tablet:items-start flex flex-col">
                <h3 className="text-xs text-gray-400">
                  Realizada en:{" "}
                  <strong className="text-white text-sm">
                    {filmInfo.production_countries[0]?.name}
                  </strong>
                </h3>
                <h3 className="text-xs text-gray-400">
                  Año:{" "}
                  <strong className="text-white text-sm">
                    {format(new Date(filmInfo.release_date), "yyyy")}
                  </strong>
                </h3>
              </div>

              {/*               Companias */}
              <div className="justify-center tablet:justify-start flex gap-5 items-center">
                {filmInfo.production_companies.map((company) => {
                  return (
                    <div className="w-12" key={company.id}>
                      <img
                        className="object-contain"
                        src={`https://image.tmdb.org/t/p/original/${company?.logo_path}`}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*           BackDrop Image Film*/}
          <div className="ml-0 tablet:ml-80">
            <img
              className="w-full h-[87.8vh] desktop:h-[92.2vh] object-cover z-0 "
              src={`https://image.tmdb.org/t/p/original/${filmInfo.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieBody;
