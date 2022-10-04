import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { ProjectsContainer } from "./styles";

import projectImage from  "../../assets/projects/project1.png"
import { ArrowElbowRightDown } from "phosphor-react";

export function Projects() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <ProjectsContainer>
      <PageTitle mainTitle={selectedLanguage.projects.title} subTitle={selectedLanguage.projects.subtitle!} />      
      <div className="projects-content">        
        <div className="project-item">
          <div className="image-container">
            <img src={projectImage} alt="" />
            <div className="access-buttons">
              <h4>Nome do Projeto</h4>
              <div className="buttons">
                <button>Live</button>
                <button>Repo</button>
              </div>
            </div>
          </div>
          <div className="text-container">
            <div className="scroll-signal"><span>Scroll</span><ArrowElbowRightDown size={20} /></div>
            <div className="project-info">
              <div className="text-content">
                <h3>Project Name</h3>
                <p>LHS DIUAOSOH oasdfho asdf hasdou oaS HDASD ASdu haisd aious  sadhf hklusd sdfgkl asdkl f ksdk fksdfkuy sagdkf saydfg asjkdfg asd    sadfkjasdfk çsadklf aklsdfkl asdlf çasdfl çasdjfijksdf sdiofs9df90sd890fs8d f sd8f sd9f sdf0 sd-0f 8sd fy9 s8d f7890 sUAOSOH oasdfho asdf hasdou oaS HDASD ASdu haisd aious  sadhf hklusd sdfgkl asdkl f ksdk fksdfkuy sagdkf saydfg asjkdfg asd    sadfkjasdfk çsadklf aklsdfkl asdlf çasdfl çasdjfijksdf sdiofs9df90sd890fs8d f sd8f sd9f sdf0 sd-0f 8sd fy9 s8d f7890 sUAOSOH oasdfho asdf hasdou oaS HDASD ASdu haisd aious  sadhf hklusd sdfgkl asdkl f ksdk fksdfkuy sagdkf saydfg asjkdfg asd    sadfkjasdfk çsadklf aklsdfkl asdlf çasdfl çasdjfijksdf sdiofs9df90sd890fs8d f sd8f sd9f sdf0 sd-0f 8sd fy9 s8d f7890 sUAOSOH oasdfho asdf hasdou oaS HDASD ASdu haisd aious  sadhf hklusd sdfgkl asdkl f ksdk fksdfkuy sagdkf saydfg asjkdfg asd    sadfkjasdfk çsadklf aklsdfkl asdlf çasdfl çasdjfijksdf sdiofs9df90sd890fs8d f sd8f sd9f sdf0 sd-0f 8sd fy9 s8d f7890 sUAOSOH oasdfho asdf hasdou oaS HDASD ASdu haisd aious  sadhf hklusd sdfgkl asdkl f ksdk fksdfkuy sagdkf saydfg asjkdfg asd    sadfkjasdfk çsadklf aklsdfkl asdlf çasdfl çasdjfijksdf sdiofs9df90sd890fs8d f sd8f sd9f sdf0 sd-0f 8sd fy9 s8d f7890 sUAOSOH oasdfho asdf hasdou oaS HDASD ASdu haisd aious  sadhf hklusd sdfgkl asdkl f ksdk fksdfkuy sagdkf saydfg asjkdfg asd    sadfkjasdfk çsadklf aklsdfkl asdlf çasdfl çasdjfijksdf sdiofs9df90sd890fs8d f sd8f sd9f sdf0 sd-0f 8sd fy9 s8d f7890 sd f7sd f sd IOUAdfj lskdjf sdf  lsdl sdlhkf hsdfhk sdjkf hsdf jksdhf j sdh fjk hsdjkfh jksdhf jksdfh jsdfk jsdfjk sdjkfh sdfS</p>
              </div>            
            </div>
          </div>
        </div>
      </div>
      {/* <p>You can see more information about me on LINKEDIN and some other project's code on GITHUB.</p> */}
    </ProjectsContainer>
  )
}