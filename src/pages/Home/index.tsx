import { HomeContainer } from "./styles"

import myImage from '../../assets/avatar.jpg'
import { portfolioContent } from "../../languages/portfolioContent"
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext"

export function Home() {

  const { selectedLanguage } = useGlobalLanguage();

  return (
    <HomeContainer>
      <div className="content">
        <div className="image-container">
          <img src={myImage} alt="" title="A picture of Diego Almeida" />
        </div>
        <h2>{selectedLanguage.home.greetings}</h2>
        <h1>{selectedLanguage.home.beforeName} <span>Diego de Almeida Cunha</span></h1>
        <p>{selectedLanguage.home.description}</p>
      </div>
      <div>
        <a href={selectedLanguage.home.file} title="Diego Almeida's resumé" target="_blank" rel="noopener noreferrer">
          <button>{selectedLanguage.home.doc}</button>
        </a>
      </div>
    </HomeContainer>
  )
}