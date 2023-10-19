import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";

import type { MovieFull } from "../interfaces/movieInterface";
import type { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
  cast: Cast[];
  movieFull?: MovieFull;
  isLoading: boolean;
}

export const useMovieDetails = ( movieId: number ) => {

  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [ movieDetailsResponse, castPromiseResponse ] = await Promise.all([ movieDetailsPromise, castPromise ]);
    setMovieDetails({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castPromiseResponse.data.cast
    })
  };

  useEffect(() => {
    getMovieDetails();
  }, [])
  
  return {
    ...movieDetails
  }
};
