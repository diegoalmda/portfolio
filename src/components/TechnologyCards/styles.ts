import styled from "styled-components";
import { breakpoints } from "../../styles/theme/default";

export const TechnologyCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 1rem;

  @media ${breakpoints.medium} {
    gap: 0.5rem;
    justify-content: center;
  }

.content-card {
    background: ${(props) => props.theme['gray-300']};
    border-radius: 20px;
    max-width: 80px;
    min-width: 80px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out;

    &:hover {
      background: ${(props) => props.theme['white']};
      transform: scale(1.15);
    }
    
    img {
      width: 60px;
      height: 60px;
    }
  }

`