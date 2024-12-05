import styled from 'styled-components'
import { Input } from '../../styles'

export const Container = styled.div`
  display: none;
  padding: 16px;
  background-color: #eee;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;
  }
`

export const HamburgerContent = styled.div`
  width: 100%;
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.5s ease;

  &.is-open {
    opacity: 1;
    max-height: 300px;
    transform: translateY(0);
  }

  ${Input} {
    margin-top: 8px;
  }
`
