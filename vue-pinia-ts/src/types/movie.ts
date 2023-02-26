interface Movie {
  poster_path: string;
  original_title: string;
  overview: string;
  release_date: string;
  isWatched: boolean;
}

interface Watched {
  isWatched: boolean;
}

export default Movie;
