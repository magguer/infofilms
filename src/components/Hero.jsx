import axios from "axios";
import { useEffect, useState } from "react";

function Hero() {
  const [heroFilms, setHeroFilms] = useState(null);

  useEffect(() => {
    const getHeroFilms = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      );
      setHeroFilms(response.data.results);
    };
    getHeroFilms();
  });

  return (
    <div className="relative pt-[70px]">
      <div className="">
        {heroFilms === null ? (
          <div className="flex justify-center h-72 items-center text-white">
            Cargando
          </div>
        ) : (
          <div>
            <div className="absolute w-full h-72 bg-black opacity-60"></div>
            <div className="absolute w-full h-72 flex items-center text-center justify-center">
              <div>
                <h1 className="text-white font-bold text-6xl">🎬 MoviHack</h1>
                <h3 className="text-white font-bold text-lg">
                  Estrenos de pelicula.
                </h3>
              </div>
            </div>
            <ul className="flex">
              {heroFilms.map((film) => {
                return (
                  <li key={film.id}>
                    <img
                      className="w-full h-72 object-cover shadow"
                      src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
