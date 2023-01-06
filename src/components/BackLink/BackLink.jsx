import { StyledLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default BackLink;
