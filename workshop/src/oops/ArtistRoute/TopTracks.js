import React from 'react';
import styled from 'styled-components';
import PlayButton from 'react-play-button';

import Heading from '../Heading';

const TopTracks = ({ tracks }) => {
  const [playing, setPlaying] = React.useState(null);

  return (
    <Wrapper>
      <Heading size="medium">Top Tracks</Heading>
      <Buttons>
        {tracks.slice(0, 3).map(track => (
          <PlayButton
            key={track.id}
            url={track.preview_url}
            audioFormat="mp3"
            active={playing === track.id}
            play={() => setPlaying(track.id)}
            stop={() => setPlaying(null)}
            playIconColor="var(--color-white)"
            stopIconColor="var(--color-white)"
            progressCircleWidth={5}
            progressCircleColor="var(--color-secondary)"
          />
        ))}
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
`;

export default TopTracks;
