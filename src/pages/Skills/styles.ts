import styled from 'styled-components'
import { breakpoints } from '../../styles/theme/default'

export const SkillsContainer = styled.div`
  @media ${breakpoints.medium} {
    font-size: 80%;
  }

  p {
    text-align: justify;
    line-height: 1.6;
    font-size: 120%;
  }

  .message {
    margin-top: 2rem;

    a {
      color: ${(props) => props.theme['green-300']};
      transition: color 0.4s;

      &:hover {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
