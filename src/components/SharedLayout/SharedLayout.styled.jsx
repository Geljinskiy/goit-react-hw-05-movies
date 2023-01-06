import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #1a111f;
  color: #efefef;
  position: fixed;
  width: 100%;
`;

export const NavigationLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  padding: 8px;
  display: block;

  &.active {
    color: #ff5500;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const ContentWrapper = styled.div`
  padding-top: 46px;
`;
