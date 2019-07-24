import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StdButton = styled(Button)`
  && {
    font-size: 2rem;
  }
`;

function About() {
  return (
    <div className="About">
      <p>about</p>
      <StdButton type="button">테스트</StdButton>
    </div>
  );
}

export default About;
