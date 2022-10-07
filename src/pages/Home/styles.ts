import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .content {
    margin-bottom: 4rem;

    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      max-width: 300px;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    h2 {
      width: fit-content;
      text-transform: uppercase;
      font-weight: normal;
      font-size: 1rem;
      background-color: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-700']};
    }
  
    h1 {
      margin: 1rem 0 2rem 0;
  
      span {
        color: ${(props) => props.theme['green-300']};
      }
    }
  }

  .resume-section { 
    button {
      padding: 10px 20px;
      border-radius: 5px;
      background-color: ${(props) => props.theme['green-300']};
      filter: brightness(1);
      translate: filter 0.2s;
      cursor: pointer;
  
      &:hover {
        filter: brightness(0.9);
        color: ${(props) => props.theme['white']};
      }
    }
  }
`;