import { PageTitle } from "../../components/PageTitle";
import { ProjectsContainer } from "./styles";
import { ArrowElbowRightDown } from "phosphor-react";
import { useGlobalContext } from "../../contexts/GlobalApplicationContext";
import { useEffect } from "react";

export function Projects() {
  const { selectedLanguage } = useGlobalContext();

  useEffect(() => {
    const items = document.querySelectorAll('.project-info')

    items.forEach(item => {
      const itemPosition = item.getBoundingClientRect()
      if(itemPosition.height < 300) {
        const scrollDiv = item.parentNode?.firstChild
        scrollDiv?.firstChild?.remove()
      }
    })
  }, [])

  return (
    <ProjectsContainer>
      <PageTitle mainTitle={selectedLanguage.projects.title} subTitle={selectedLanguage.projects.subtitle!} />      
      <p className="main-message">
        {selectedLanguage.projects.message1}
        <a href="https://www.linkedin.com/in/diegoalmda/" target="_blank" aria-label="Go to Diego Almeida's linkedin profile">LinkedIn</a>
        {selectedLanguage.projects.message2}
        <a href="https://github.com/diegoalmda" target="_blank" aria-label="Go to Diego Almeida's github profile">GitHub</a>.
      </p>
      <div className="projects-content">        
        {
          selectedLanguage.projects.list.map(project => {
            return (
              <div className="project-item" key={project.name}>
                <div className="image-container">
                  <img src={`${import.meta.env.VITE_PUBLIC_URL}/${project.image}`} alt="" />
                  <div className="access-buttons">
                    <h4>{project.name}</h4>
                    <div className="buttons">
                      {
                        project.live && <a href={`${project.live}`} target="_blank" aria-label="Go to project live page">
                          <button>{`${selectedLanguage.selected === "en" ? "Live": "Abrir"}`}</button>
                        </a>
                      }
                      {
                        project.repo && <a href={`${project.repo}`} target="_blank" aria-label="Go to repository page on github">
                          <button>Repo</button>
                        </a>
                      }

                      {
                        !project.repo && !project.live && <span className="soon-message">{project.message}</span>
                      }
                    </div>
                  </div>
                </div>
                <div className="text-container">
                  <div className="scroll-signal"><span className="scrolling-tag">{`${selectedLanguage.selected === "en" ? "Scroll": "Rolagem"}`}</span><ArrowElbowRightDown size={20} /></div>
                  <div className="project-info">
                    <div className="text-content">
                      <h2>{project.name}</h2>
                      <p className="technologies">
                        {
                          project.technologies.map((technology) => {
                            let signal = ","
                            if(project.technologies.indexOf(technology) === project.technologies.length - 1) {
                              signal = "."
                            }
                            return (
                              <span key={technology}>{technology}{signal} </span>
                            )
                          })
                        }
                      </p>
                      <p>{project.text}</p>
                    </div>            
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </ProjectsContainer>
  )
}