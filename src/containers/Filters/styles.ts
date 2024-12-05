import styled from 'styled-components'
import { Props } from '.'

export const Filters = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.nCols}, 1fr)`};
  grid-gap: 8px;
  margin-top: 16px;
`
