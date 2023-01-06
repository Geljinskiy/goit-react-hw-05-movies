import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  margin: 6px 0;
  font-weight: 600;
  &:focus,
  &:hover {
    color: #00487c;
  }
`;
