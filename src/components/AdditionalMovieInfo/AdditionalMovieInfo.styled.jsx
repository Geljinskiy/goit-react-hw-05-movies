import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-bottom: 28px;
`;

export const InfItem = styled.li`
  margin-top: 6px;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const InfLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 18px;
  &.active {
    color: #ff5500;
  }
`;

export const List = styled.ul`
  display: flex;
`;
