import styled from "styled-components";
import { breakpoints } from "../../styles/theme/default";

export const HamburgerMenu = styled.aside`
  position: absolute;
  display: none;
  cursor: pointer;
  right: 1rem;
  top: 1rem;

  @media ${breakpoints.medium} {
    display: block;
  }
`

interface ActiveMenuProps {
  active: boolean;
}

export const SideMenuContainer = styled.div<ActiveMenuProps>`
  width: 200px;  
  height: 100vh;
  background: ${(props) => props.theme['gray-900']};
  transition: margin 0.5s;
  
  @media ${breakpoints.medium} {
    margin-left: ${(props) => props.active ? '-200px' : '0'};
    position: ${(props) => props.active ? 'absolute' : 'absolute'};
  }
  
  .logo-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    
    width: 150px;
    height: 150px;
    background: ${(props) => props.theme['green-700']};
    margin: 1rem;
    /* border-radius: 50%; */
    
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    div {
      background: ${(props) => props.theme['white']};
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['gray-800']};
      margin-bottom: 0.5rem;
    }
    
    h1 {
      font-family: 'Indie Flower';
      color: ${(props) => props.theme['white']};
      font-size: 1.2rem;
    }
  }
  
  ul {
    li {
      width: 100%;
      border-bottom: 0.01rem solid ${(props) => props.theme['green-500']};
      background: rgba(0, 135, 95, 0.05);
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a {
        transition: transform 0.2s;
        margin-left: 1rem;
      }
      a:hover {
        color: white;   
        transform: scale(1.2); 
        font-weight: bold;
      }   
      /* .active {
        background-color: ${(props) => props.theme['gray-800']};
      } */
    }
  }
  .social {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    height: 40px;
    a {
      transition: transform 0.4s;
    }
    a:hover {
      transform: scale(1.2);
      color: ${(props) => props.theme['green-300']};
    }
  }
`