import styled from 'styled-components'
import { breakpoints } from '../../styles/theme/default'

export const ContactContainer = styled.div`

  max-width: 1050px;

  p {
    margin-bottom: 2rem;
  }
  .form-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 50%);
    grid-row-gap: 0.5rem;
    justify-content: center;
    width: 100%;

    & > :nth-child(1) {
      margin-right: 0.5rem;
    }

    @media ${breakpoints.small} {
      & > :nth-child(1) {
        margin-right: 0;
      }

      .form-element {
        grid-column: 1 / 3;
      }
    }
  
    input, textarea {
      width: 100%;
      outline: 0;
      border: none;
      height: 50px;
      padding-left: 5px;
      background: ${(props) => props.theme['gray-700']};
      border-bottom: 2px solid ${(props) => props.theme['green-700']};
      color: ${(props) => props.theme['gray-400']};
      
      &::placeholder {
        color: ${(props) => props.theme['gray-400']};
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme['gray-700']} inset !important;
    }
    input:-webkit-autofill{
        -webkit-text-fill-color: ${(props) => props.theme['gray-400']} !important;
    }

    .error {
      border-bottom: 2px solid ${(props) => props.theme['red-300']};
    }

    .full-width {
      grid-column: 1 / 3;
      width: 100%;

      display: flex;
      justify-content: flex-end;

      textarea {
        height: 100px;
        resize: none;
        padding-top: 5px;
      }

      button {
        padding: 12px;
        width: 30%;
        border-radius: 5px;
        background-color: ${(props) => props.theme['green-300']};
        filter: brightness(1);
        translate: filter 0.2s;
        cursor: pointer;
        font-weight: 400;
        font-size: 120%;
    
        &:hover {
          filter: brightness(0.9);
          color: ${(props) => props.theme['white']};
        }

        @media ${breakpoints.small} {
          width: 100%;
        }
      }
    }
  }
`
