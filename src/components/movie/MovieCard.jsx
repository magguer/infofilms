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
      className="flex justify-center cursor-pointer  hover:top-[-3px] hover:left-[-3px] z-0"
    >
      <div className="">
        <a className="text-white w-full shadow bg-[#0f151f] text-center transition-all duration-200">
          <div>
            <img
              className={
                hoverCard
                  ? "object-cover w-full h-[32rem] tablet:h-96 rounded-t-lg transition-all duration-200"
                  : "object-cover w-full  h-[32rem] tablet:h-96 rounded-lg transition-all duration-200"
              }
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                  : "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <p
              className={
                hoverCard
                  ? `opacity-1 px-4 text-sm ${valorationStyle} rounded-b-lg transition-all duration-200`
                  : "opacity-0 px-4 text-sm transition-all duration-200"
              }
            >
              {film.vote_average}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
