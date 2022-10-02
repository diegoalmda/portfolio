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
  max-width: 200px;  
  overflow: hidden;
  min-width: 200px;  
  height: 100vh;
  background: ${(props) => props.theme['gray-900']};
  transition: margin 0.5s;
  position: relative;
  
  @media ${breakpoints.medium} {
    position: absolute;
    margin-left: -200px;
    margin-left: ${(props) => props.active ? '0' : '-200px'};
    font-size: 0.8rem;
  }

  .language-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0.5rem 1rem 0.5rem;
    gap: 0.5rem;

    p {
      position: absolute;
      top: 0.2rem;
      left: 0.5rem;
      font-weight: bold;
      font-size: 0.8rem;
    }

    button {
      display: flex;
      align-items: center;
      background: ${(props) => props.theme['gray-800']};
      width: 100%;
      border-radius: 20px;
      outline: 0;
      cursor: pointer;
      border: 1px solid ${(props) => props.theme['gray-600']};
      padding: 0.2rem 0.5rem 0.2rem 0.2rem;
      transition: all 0.2s;

      &:hover, &.activeLanguage {
        background: ${(props) => props.theme['green-900']};
        border: 1px solid ${(props) => props.theme['green-700']};
      }

      img {
        width: 25px;
        height: auto;
        margin-right: 0.5rem;
      }

      span {
        color: ${(props) => props.theme['white']};
        font-size: 0.8rem;
      }
    }
  }
  
  .logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    background: ${(props) => props.theme['green-700']};
    /* border-radius: 50%; */
    
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 1rem;
      width: 100%;
      height: 3rem;
      color: ${(props) => props.theme['white']};
            
      span {
        font-family: 'Rubik Dirt';
        font-size: 1rem;
        margin-left: 0.5rem;
      }

      /* &.active {
        background: ${(props) => props.theme['green-500']};
      } */

      &:hover {
        background: ${(props) => props.theme['green-500']};
      }
    }
    
  }
  
  ul {
    li {
      width: 100%;
      height: 3rem;
      border-bottom: 0.01rem solid ${(props) => props.theme['green-500']};
      background: rgba(0, 135, 95, 0.05);
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a {
        height: inherit;
        width: 100%;
        padding-left: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.2s;      
        
        &.active, &:hover {
          font-weight: bold;
          font-size: 1.1rem;
          border-top: 0.01rem solid ${(props) => props.theme['green-500']};          
          border-bottom: 0.01rem solid ${(props) => props.theme['green-500']};          
        }

        &.active {
          background-color: ${(props) => props.theme['gray-800']};
        }
      }
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