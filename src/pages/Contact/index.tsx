import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { ContactContainer } from "./styles";

export function Contact() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <ContactContainer>
      <PageTitle mainTitle={selectedLanguage.contact.title} subTitle={selectedLanguage.contact.subtitle!} />
      {/* <ProgressBar maxValue={50} barColor="#f9f9f9" /> */}
    </ContactContainer>
  )
}