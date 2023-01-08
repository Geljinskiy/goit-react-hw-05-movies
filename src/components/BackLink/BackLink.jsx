import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default BackLink;

BackLink.propTypes = {
  children: PropTypes.string.isRequired,
};
