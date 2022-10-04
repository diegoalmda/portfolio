import styled from 'styled-components'
import { breakpoints } from '../../styles/theme/default'

export const ProjectsContainer = styled.div`
  .main-message {
    margin-bottom: 1rem;
  }

  .projects-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;    
    
    .project-item {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      min-height: 200px;
      width: 100%;
      height: 100%;
      display: flex;
      padding: 2rem;

      &:hover .image-container .access-buttons {
        height: 100%;
      }      
      
      @media ${breakpoints.big} {
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
      }

      @media ${breakpoints.medium} {
        margin-bottom: 0;
      }

      .image-container {
        position: relative;
        flex: 1;
        max-width: 400px;

        @media ${breakpoints.big} {
          margin-bottom: 2rem;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left;
        }

        .access-buttons {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.7);
          overflow: hidden;
          width: 100%;
          height: 0;
          transition: .5s ease;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;

          h4 {
            color: ${(props) => props.theme['white']};
          }

          .buttons {
            display: flex;
            gap: 1.2rem;

            button {
              padding: 10px 20px;
              border-radius: 5px;
              background-color: ${(props) => props.theme['green-300']};
              filter: brightness(1);
              translate: filter 0.2s;
              cursor: pointer;
              color: ${(props) => props.theme['white']};
              font-weight: 700;
              border: 1px solid ${(props) => props.theme['white']};
          
              &:hover {
                filter: brightness(0.9);
              }            
            }

            .soon-message {
              color: ${(props) => props.theme['green-300']};
            }
          }
        }
      }

      .text-container {
        flex: 1;
        position: relative;
        width: 100%;

        .scroll-signal {
          width: 100%;
          text-align: right;
          color: ${(props) => props.theme['green-300']};
          position: absolute;

          top: -1.5rem;
        }
        
        .project-info {
          max-height: 300px;
          padding: 0 1rem 2rem 1rem;
          overflow: auto;
          
          @media ${breakpoints.big} {
            padding: 1rem;
            padding-left: 0;
          }
          
          @media ${breakpoints.medium} {
            padding: 0;
          }

          .text-content {
            .technologies {
              margin: 0.5rem 0 1.2rem;
              font-weight: 500;
              color: ${(props) => props.theme['green-300']};
            }
          }
        }
      }
    }
  }
`
