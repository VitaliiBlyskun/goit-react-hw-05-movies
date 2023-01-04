import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { moviesByName } from 'components/services/api';
import { Form, Input, Button, List, Item } from './Movies.styled';
import { MovieName } from 'components/MoviesListTemplate/MoviesListTemplate.styled';

const Movies = () => {
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('searchQuery') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setIsLoading(true);

    async function findMovies() {
      try {
        const { results } = await moviesByName(searchQuery);

        setQuery([...results]);
        setResult(true);
      } catch (error) {
        setError(error.message);
        setResult(false);
      } finally {
        setIsLoading(false);
      }
    }

    findMovies();
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    setSearchParams({ searchQuery: form.elements.searchQuery.value });
    form.reset();
    setQuery([]);
  };

  return (
    <>
      <main>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="searchQuery"
          />
          <Button type="submit">Search</Button>
        </Form>
        {isLoading && 'Waiting for'}
        {result === false && <h3>{error}</h3>}
        <List>
          {result === true &&
            query.map(({ id, title }) => (
              <Item key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <MovieName>{title}</MovieName>
                </Link>
              </Item>
            ))}
        </List>
      </main>
    </>
  );
};

Movies.propTypes = {
  query: PropTypes.array,
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  result: PropTypes.bool,
  searchParams: PropTypes.object,
};

export default Movies
