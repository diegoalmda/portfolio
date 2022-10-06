import { useForm, ValidationError } from "@formspree/react";
import { PageTitle } from "../../components/PageTitle";
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";
import { ContactContainer } from "./styles";
import swal from 'sweetalert';
import { FormEvent, useRef, useState } from "react";

export function Contact() {
  const { selectedLanguage } = useGlobalLanguage();

  const nameRef = useRef(null)

  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formName, setFormName] = useState("");
  const [formSubject, setFormSubject] = useState("");

  const [state, submit] = useForm("xwkzbjqz"); 

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    await submit(e);

    setFormEmail('')
    setFormMessage('')
    setFormName('')
    setFormSubject('')    
  }
  
  if (state.succeeded) {
    swal(selectedLanguage.contact.form.success, selectedLanguage.contact.form.successMessage, "success");
  } 
  
  return (
    <ContactContainer>
      <PageTitle mainTitle={selectedLanguage.contact.title} subTitle={selectedLanguage.contact.subtitle!} />
      <p>{selectedLanguage.contact.message}</p>
      <form id="contact-form" className="form-container" onSubmit={handleSubmit}>
        <div className="form-element">
          <input 
            type="text" 
            name="name" 
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            placeholder={`${selectedLanguage.contact.form.name}`} 
          />
        </div>
        <div className="form-element">
          <input 
            type="text" 
            name="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            placeholder="E-mail *"
            required aria-required 
          />
        </div>
        <div className="full-width">
          <input 
            type="text" 
            value={formSubject}
            name="subject" 
            onChange={(e) => setFormSubject(e.target.value)}
            placeholder={`${selectedLanguage.contact.form.subject}`} 
          />
        </div>
        <div className="full-width">
          <textarea 
            name="message"
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
            placeholder={`${selectedLanguage.contact.form.message} *`} 
            required aria-required
          />
        </div>
        <div className="full-width">
          <button type="submit" disabled={state.submitting}>{selectedLanguage.contact.form.button}</button>
        </div>
      </form>
    </ContactContainer>
  )
}