import React from 'react';
import styled from 'styled-components';

import { humanizeNumber } from '../../utils';

import Avatar from '../Avatar';
import Heading from '../Heading';

const Header = ({ name, photoSrc, followerCount }) => {
  return (
    <Wrapper>
      <Avatar size="large" src={photoSrc} />
      <Name size="large" forwardedAs="h2">
        {name}
      </Name>
      <Followers>
        <Count>{humanizeNumber(followerCount)}</Count> followers
      </Followers>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled(Heading)`
  margin-top: -48px;
  text-align: center;
  line-height: 1.2;
`;

const Followers = styled.p`
  margin-top: -16px;
  font-size: 14px;
`;

const Count = styled.span`
  font-weight: bold;
  color: var(--color-primary);
`;

export default Header;
