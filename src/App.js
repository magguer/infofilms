//Dependencias
import { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
//CSS
import './App.css';
//Componentes
import Header from './components/Header';

import MoviesList from './components/MoviesList';
import Hero from './components/Hero';

function App() {
  const [films, setFilms] = useState(null);
  const [star, setStar] = useState(7)

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=59540ca3d1f963deca67c4eaf91a2dc5&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_average.gte=${star}`
      );
      setFilms(response.data.results);
    };
    getFilms();
  }, [star]);

  const ratinFilmsList = (value) => {
    setStar(value * 2)
  };

  return (
    <div>
      <div className='shadow-lg fixed w-full z-50'>
        <Header />
      </div>
      {/* Hero */}
      <Hero films={films} />
      {/*       Rating Films */}
      <div className="flex justify-end pt-7 mr-10">
        <ReactStars
          value={3}
          char={"◉"}
          count={5}
          onChange={(value) => ratinFilmsList(value)}
          size={24}
          initial={star}
          activeColor="#1f2937"
          classNames="border-2 pb-1 border-gray-800 px-4 rounded-full m-0"
        />
      </div>
      {films === null ?
        <div className="flex justify-center h-72 items-center text-white">
          Cargando
        </div>
        :
        <MoviesList films={films} star={star} />}

    </div>
  );
}

export default App;
