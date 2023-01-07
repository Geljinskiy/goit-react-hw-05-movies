import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  NavigationLink,
  List,
  ContentWrapper,
} from './SharedLayout.styled.jsx';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <div className="container">
          <nav>
            <List className='list'>
              <li>
                <NavigationLink to="/">
                  Home
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/movies">
                  Movies
                </NavigationLink>
              </li>
            </List>
          </nav>
        </div>
      </Header>
      <ContentWrapper className="container">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </ContentWrapper>
    </>
  );
};

export default SharedLayout;
