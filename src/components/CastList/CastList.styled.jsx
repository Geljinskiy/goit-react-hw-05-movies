import styled from 'styled-components';

export const ImageWrapper = styled.div`
  background-color: #d3d3d3;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 6px;
  width: 200px;
  height: 298px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 28px;
`;

export const ActorName = styled.p`
  font-weight: 600;
  margin-bottom: 6px;
`;

export const ActorRole = styled.p`
  font-size: 14px;
`;
