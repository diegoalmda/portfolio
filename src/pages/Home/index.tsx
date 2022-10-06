import { HomeContainer } from "./styles"

import myImage from '../../assets/avatar.jpg'
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalApplicationContext";

export function Home() {

  const { selectedLanguage } = useGlobalContext();

  return (
    <HomeContainer>
      <div className="content">
        <div className="image-container">
          <img src={myImage} alt="A picture of Diego Almeida" />
        </div>
        <h2>{selectedLanguage.home.greetings}</h2>
        <h1>{selectedLanguage.home.beforeName} <span>Diego de Almeida Cunha</span></h1>
        <p>{`${selectedLanguage.home.description} `}<NavLink to="/about">{selectedLanguage.home.message}</NavLink></p>
      </div>
      <div className="resume-section">
        <a href={selectedLanguage.home.file} title="Diego Almeida's CV" target="_blank" rel="noopener noreferrer">
          <button>{selectedLanguage.home.doc}</button>
        </a>
      </div>
    </HomeContainer>
  )
}