import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { movieActors } from '../services/api';
import { List, Item, Image, Name, Character } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetchCast = async () => {
      try {
        const { cast } = await movieActors(movieId);
        setCast(cast);
        setResult(true);
      } catch (error) {
        setError(error.message);
        setResult(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && 'Waiting for'}
      {result === false && <h3>{error}</h3>}
      <List>
        {result === true &&
          cast.map(({ name, profile_path, id, character }) => (
            <Item key={id}>
              {profile_path !== null && (
                <Image
                  src={`http://image.tmdb.org/t/p/w780/${profile_path}`}
                  alt={name}
                />
              )}
              <Name>{name}</Name>
              <Character>Character: {character}</Character>
            </Item>
          ))}
      </List>
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
  error: PropTypes.any,
  isLoading: PropTypes.bool,
  result: PropTypes.bool,
};

export default Cast
