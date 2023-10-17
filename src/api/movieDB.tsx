import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es-ES'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTA0ZjM0MjM5ZjgzOWQwN2EyZjEzMzYwMGFkNjUxMCIsInN1YiI6IjY1MWRmMzg4NzQ1MDdkMDEzOTViZTU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5jGv11MsHYw3txZXM66HblCes0uuWthwQC5u-NUS0LQ'
  }
});

export default movieDB;
