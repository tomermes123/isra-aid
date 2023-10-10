import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
  max-width: 1400px; // Adjust as needed
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns for medium screens
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr); // 3 columns for large screens
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); // 4 columns for extra large screens
  }
`

export default Grid
