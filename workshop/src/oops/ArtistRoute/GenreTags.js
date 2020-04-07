import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading';
import Tag from '../Tag';

const TopTracks = ({ genres }) => {
  return (
    <Wrapper>
      <Heading size="medium">Tags</Heading>
      <Row>
        {genres.slice(0, 2).map(genre => (
          <Tag key={genre}>{genre}</Tag>
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

export default TopTracks;
