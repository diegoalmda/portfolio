import { PageTitle } from "../../components/PageTitle";
import { SkillsContainer } from "./styles";
import { TechnologyCards } from "../../components/TechnologyCards";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalApplicationContext";

export function Skills() {
  const { selectedLanguage } = useGlobalContext();

  return (
    <SkillsContainer>
      <PageTitle mainTitle={selectedLanguage.skills.title} subTitle={selectedLanguage.skills.subtitle!} />
      <p>{ selectedLanguage.skills.text }</p> 
      <p className="message">
        { selectedLanguage.skills.message1 } &nbsp;<NavLink to="/projects">{selectedLanguage.skills.message2}</NavLink>
      </p>
      <TechnologyCards />
    </SkillsContainer>
  )
}