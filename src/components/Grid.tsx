import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
  gap: 20px;
  padding: 20px;
  max-width: 100%;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Grid;
