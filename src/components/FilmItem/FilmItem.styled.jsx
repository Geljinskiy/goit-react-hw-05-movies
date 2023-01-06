import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 4px 6px;
  display: block;
  /* width: 100%; */
    &:hover,
    &:focus{
        color: #00487c;
    }
`;
