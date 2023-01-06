import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 270px;
  overflow: hidden;
  border-radius: 16px;
  margin-right: 50px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
`;

export const InfoWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Span = styled.span`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
