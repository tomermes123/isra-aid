import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Grid
