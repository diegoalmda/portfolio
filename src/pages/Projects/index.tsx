import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { ProjectsContainer } from "./styles";

export function Projects() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <ProjectsContainer>
      <PageTitle mainTitle={selectedLanguage.projects.title} subTitle={selectedLanguage.projects.subtitle!} />
      <p>You can see more information about me on LINKEDIN and some other project's code on GITHUB.</p>
    </ProjectsContainer>
  )
}