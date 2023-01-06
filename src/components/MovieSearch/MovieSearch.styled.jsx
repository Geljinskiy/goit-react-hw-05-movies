import styled from 'styled-components';

export const Input = styled.input`
  width: 210px;
  padding: 0;
  margin: 0;
  outline: none;
  padding-left: 5px;
  border: 1.5px solid black;

  &:hover,
  &:focus {
    border-color: #00487c;
  }
`;

export const Button = styled.button`
  margin: 0;
  background-color: #d3d3d3;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus{
    background-color: #dfdfdf;
  }
;
`;

export const Label = styled.label`
  height: 26px;
  display: flex;
`;
