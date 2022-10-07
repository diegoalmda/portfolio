import styled from "styled-components";

export const TitleContainer = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 200%;
    font-weight: 500;
    color: ${(props) => props.theme['gray-300']};
  }

  hr {
    width: 70px;
    display: inline-block;
    margin-bottom: 0.2rem;
    border: 2px solid ${(props) => props.theme['green-300']};
  }

  span {
    font-family: 'Indie Flower', cursive;
    margin-left: 1rem;
    color: ${(props) => props.theme['green-500']};
  }
`
