/* CSS */
import "../../animations/MovieCardAn.css";
/* Dependencias */
import { useState } from "react";

function MovieCard({ film }) {
  const [hoverCard, setHoverCar] = useState(false);

  let valorationStyle;

  if (film.vote_average >= 8) {
    valorationStyle = "bg-green-400";
  } else if (film.vote_average < 8 && film.vote_average >= 7) {
    valorationStyle = "bg-yellow-400";
  } else if (film.vote_average < 7) {
    valorationStyle = "bg-red-400";
  }

  return (
    <div
      onMouseEnter={() => setHoverCar(true)}
      onMouseLeave={() => setHoverCar(false)}
      className=" relative flex justify-center cursor-pointer transition-all duration-150 hover:scale-[102%]"
    >
      <div className="relative overflow-hidden">
        <div
          className={
            hoverCard
              ? `opacity-1 absolute flex items-center justify-center top-0 transition-all w-full h-8 bg-black bg-opacity-60 rounded-t-lg  duration-200 delay-200`
              : "opacity-0 absolute  flex items-center justify-center top-[-30px] transition-all w-full   h-8 bg-black bg-opacity-60 rounded-t-lg duration-200"
          }
        >
          <p className="text-white text-base mx-3">
            {(film.vote_average / 2).toFixed(1)} ☆
          </p>
        </div>
        <a className="text-white w-full shadow bg-[#0f151f] text-center transition-all duration-200">
          <div>
            <img
              className="object-cover w-full h-[32rem] tablet:h-96 rounded-lg transition-all duration-200"
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                  : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
              }
              alt=""
            />
          </div>
          <div
            className={
              hoverCard
                ? `opacity-1 absolute bottom-0 transition-all w-full h-20 bg-black bg-opacity-60 rounded-b-lg  duration-200`
                : "opacity-0 absolute bottom-[-30px] transition-all h-20 w-full bg-black bg-opacity-60 rounded-b-lg   duration-200"
            }
          >
            <div className="w-full flex justify-center">
              <h2 className="font-bold max-w-[200px] mt-3 max-h-[50px] overflow-hidden">
                {film.title}
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
