import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { SkillsContainer } from "./styles";
import { TechnologyCards } from "../../components/TechnologyCards";

export function Skills() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <SkillsContainer>
      <PageTitle mainTitle={selectedLanguage.skills.title} subTitle={selectedLanguage.skills.subtitle!} />
      <p>{ selectedLanguage.skills.text }</p> 
      <p className="message">{ selectedLanguage.skills.message }</p>
      <TechnologyCards />
    </SkillsContainer>
  )
}