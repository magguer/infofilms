import axios from "axios";
import { useEffect, useState } from "react";

function useApi({ dep, star, genreId, yearFilm, setPage }) {

  const [data, setData] = useState(null)

  useEffect(() => {
    setPage(1);
    const getFilms = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_average.gte=${star}&with_genres=${genreId}&year=${yearFilm}`
      );
      setData(response.data.results);
    };
    getFilms();
  }, [dep]);


  return data
}

export default useApi