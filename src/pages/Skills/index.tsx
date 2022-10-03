import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { SkillsContainer } from "./styles";

export function Skills() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <SkillsContainer>
      <PageTitle mainTitle={selectedLanguage.skills.title} subTitle={selectedLanguage.skills.subtitle!} />
      {/* <ProgressBar maxValue={50} barColor="#f9f9f9" /> */}
    </SkillsContainer>
  )
}