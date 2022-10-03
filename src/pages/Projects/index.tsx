import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { ProjectsContainer } from "./styles";

export function Projects() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <ProjectsContainer>
      <PageTitle mainTitle={selectedLanguage.projects.title} subTitle={selectedLanguage.projects.subtitle!} />
      {/* <ProgressBar maxValue={50} barColor="#f9f9f9" /> */}
    </ProjectsContainer>
  )
}