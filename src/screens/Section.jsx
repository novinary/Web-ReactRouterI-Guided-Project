import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string } from 'prop-types';


const kf = keyframes`
  to {
    opacity: 1;
  }
`;

const StyledSection = styled.section`
  background-color: ${pr => pr.color};
  margin-top: 20px;
  padding: 20px;
  opacity: 0;
  animation: ${kf} 1s ease-out forwards;
`;

export default function Section({ heading, content, color, path }) {
  return (
    <StyledSection color={color}>
      <h1>{heading}</h1>
      {!!path && <h3>{path}</h3>}
      <p>{content}</p>
    </StyledSection>
  );
}

Section.proptTypes = {
  heading: string.isRequired,
  content: string.isRequired,
  color: string.isRequired,
  path: string,
};
