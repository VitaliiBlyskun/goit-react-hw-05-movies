import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 10px;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  width: 250px;
  border: 1px solid #ccc;
  &:hover,
  :focus {
    box-shadow: 0 0 5px orangered;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: orangered;
  margin-left: 5px;
  border-radius: 10px;

  &:hover,
  :focus {
    box-shadow: 0 0 5px orangered;
    background-color:  orangered;
    color: black;
  }
`;

export const List = styled.ul`
  display: block;
`;

export const Item = styled.li`
  list-style: none;
  > a {
    text-decoration: none;
  }
`;
