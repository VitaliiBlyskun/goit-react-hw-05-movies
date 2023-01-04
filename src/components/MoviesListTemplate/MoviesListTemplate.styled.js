import styled from "styled-components";

export const Container = styled.ul`
  display: block;
`;

export const CardWrapper = styled.li`
  list-style: none;
  > a {
    text-decoration: none;
  }
`;


export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;

  :hover {
    color: orangered;
  }
`;
