import styled from 'styled-components';

export const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: center;

  li {
    margin-bottom: 1em;
  }

  @media (min-width: 900px) {
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  height: 200px;
  width: 100%;
`;