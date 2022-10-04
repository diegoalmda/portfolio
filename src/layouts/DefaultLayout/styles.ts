import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;

  main {
    width: 100%;
    padding: 3rem;

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
