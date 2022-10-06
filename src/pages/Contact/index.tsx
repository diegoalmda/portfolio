import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { ContactContainer } from "./styles";

export function Contact() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <ContactContainer>
      <PageTitle mainTitle={selectedLanguage.contact.title} subTitle={selectedLanguage.contact.subtitle!} />
      <p>{selectedLanguage.contact.message}</p>
      <form className="form-container">
        <div className="form-element">
          <input type="text" placeholder={`${selectedLanguage.contact.form.name} *`} required aria-required />
        </div>
        <div className="form-element">
          <input type="email" placeholder="E-mail *" required aria-required />
        </div>
        <div className="full-width">
          <input type="text" placeholder={`${selectedLanguage.contact.form.subject}`} />
        </div>
        <div className="full-width">
          <textarea name="" id="" placeholder={`${selectedLanguage.contact.form.message} *`} required aria-required />
        </div>
        <div className="full-width">
          <button>{selectedLanguage.contact.form.button}</button>
        </div>
      </form>
    </ContactContainer>
  )
}