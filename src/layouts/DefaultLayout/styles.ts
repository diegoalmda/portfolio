import styled from 'styled-components'
import { breakpoints } from '../../styles/theme/default'

export const LayoutContainer = styled.div`
  display: flex;
  
  main {
    max-width: 1600px;
    min-height: 100vh;
    width: 100%;
    padding: 3rem;
    margin: auto;

    @media ${breakpoints.medium} {
      font-size: 80%;
      padding: 1.5rem;
    } 

    p {
      text-align: justify;
      line-height: 1.6;
      font-size: 120%;      
    }

    a {
      color: ${(props) => props.theme['green-300']};
      transition: color 0.4s;
      font-weight: bold;

      &:hover {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
  
`
