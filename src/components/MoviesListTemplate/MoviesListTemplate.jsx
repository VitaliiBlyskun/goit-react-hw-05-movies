import { Link } from "react-router-dom";
import { Container, CardWrapper, MovieName  } from "../MoviesListTemplate/MoviesListTemplate.styled";

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map(({id, title, name}) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`}>
            <MovieName>{title || name}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};



