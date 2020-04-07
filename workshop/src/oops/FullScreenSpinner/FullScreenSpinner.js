import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const FullScreenSpinner = () => {
  return (
    <Wrapper>
      <Loader color="var(--color-primary)" height={80} width={80} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-content: center;
`;

export default FullScreenSpinner;
