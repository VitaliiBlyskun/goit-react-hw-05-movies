import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { popularMovies } from "components/services/api";
import { MoviesList } from "../components/MoviesListTemplate/MoviesListTemplate";
import { Title } from "./Home.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    const fetchMovies = async () => {
      try {
        const data = await popularMovies();
        setMovies(data)
      } catch (error) {
        console.log("Error", error)
      } finally{
        setIsLoading(false);
      }
    }
    fetchMovies()
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      {isLoading && "Waiting for"}
      <MoviesList movies={movies} />
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  result: PropTypes.bool,
};

export default Home