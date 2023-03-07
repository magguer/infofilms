import { useParams } from "react-router-dom";
import MovieBody from "../components/movie/MovieBody";

function MovieRoute() {
  const params = useParams();
  return (
    <div>
      <MovieBody movieId={params.id} />
    </div>
  );
}

export default MovieRoute;
