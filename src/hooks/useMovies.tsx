import { useEffect, useState } from "react";

import movieDB from "../api/movieDB";
import type { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('now_playing');
    setNowPlayingMovies(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // Fetch the now playing movies
    getMovies();
  }, []);

  return {
    nowPlayingMovies,
    isLoading
  }
};
