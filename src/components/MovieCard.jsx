import "../animations/MovieCardAn.css";

function MovieCard({ film }) {
  let valorationStyle;

  if (film.vote_average >= 8) {
    valorationStyle = "bg-green-400";
  } else if (film.vote_average < 8 && film.vote_average >= 7) {
    valorationStyle = "bg-yellow-400";
  } else if (film.vote_average < 7) {
    valorationStyle = "bg-red-400";
  }

  return (
    <div className="flex justify-center cursor-pointer ">
      <a className="text-white w-full shadow hover:shadow-xl bg-[#0f151f] text-center rounded-lg transition-all duration-200">
        <div>
          <p className="px-4 py-2 text-sm font-bold">{film.title}</p>
        </div>
        <div>
          <p className={`px-4 py-2 text-sm ${valorationStyle}`}>
            Valoración: {film.vote_average}
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-96"
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt=""
          />
        </div>
      </a>
    </div>
  );
}

export default MovieCard;
