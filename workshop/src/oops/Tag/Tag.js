import styled from 'styled-components';

const CORNER_SIZE = 10;

const Tag = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 6px;
  clip-path: polygon(10px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 10px);
  background: var(--color-gray-fade);
  padding: 8px 20px;
  margin: 0 8px;
  font-weight: 600;
  font-size: 11px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${CORNER_SIZE}px;
    height: ${CORNER_SIZE}px;
    background: var(--color-gray-fade);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 3px 0;
  }
`;

export default Tag;
