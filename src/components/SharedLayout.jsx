import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
