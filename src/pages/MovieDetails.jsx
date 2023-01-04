import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';

import { movieFullInfo } from '../../src/components/services/api';
import {
  Button,
  Image,
  Container,
  ImageHolder,
  InfoHolder,
  Title,
  Score,
  Overview,
  Text,
  Genres,
  AddInfo,
  List,
  Item,
  ListGenres,
  ItemGenre,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const data = await movieFullInfo(movieId);

        setMovie(data);
        setResult(true);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
        setResult(false);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [movieId]);

  return (
    <>
      {isLoading && 'Waiting for'}
      {result === false && <h3>{error}</h3>}
      {result === true && (
        <>
          <Button to={backLinkHref.current}>return</Button>
          <Container>
            <ImageHolder>
              <Image
                src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt={movie.title}
              />
            </ImageHolder>
            <InfoHolder>
              <Title>{movie.title || "-"}</Title>
              <Score>User Score: {movie.vote_average}</Score>
              <Overview>Overview:</Overview>
              <Text>{movie.overview || "-"}</Text>
              <Genres>Genres:</Genres>
              <ListGenres>
                {movie.genres.map(({ id, name }) => (
                  <ItemGenre key={id}>{name}</ItemGenre>
                ))}
              </ListGenres>
            </InfoHolder>
          </Container>
          <AddInfo>Additional information</AddInfo>
          <List>
            <Item>
              <Link to="cast">Cast</Link>
            </Item>
            <Item>
              <Link to="reviews">Reviews</Link>
            </Item>
          </List>
        </>
      )}
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
