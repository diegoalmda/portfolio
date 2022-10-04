import styled from "styled-components";
import { breakpoints } from "../../styles/theme/default";

export const AboutContainer = styled.div`
  color: ${(props) => props.theme['gray-300']};

  @media ${breakpoints.medium} {
    font-size: 80%;
  }

  p {
    text-align: justify;
    line-height: 1.6;
    font-size: 120%;
  }

  section {
    margin-top: 3rem;
    h1 {
      font-weight: 600;
      margin-bottom: 2rem;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-weight: 500;
      display: inline-block;
      flex-basis: 200px;
    }

    div {
      display: flex;
    }

    p {
      margin-top: 0.5rem;      
      width: fit-content;
      font-size: 90%;
    }
  }
`