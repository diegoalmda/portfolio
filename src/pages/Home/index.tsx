import { HomeContainer } from "./styles"

import myImage from '../../assets/avatar.jpg'
import { portfolioContent } from "../../languages/portfolioContent"

export function Home() {

  const { pt, en } = portfolioContent

  return (
    <HomeContainer>
      <div className="content">
        <div className="image-container">
          <img src={myImage} alt="" title="A picture of Diego Almeida" />
        </div>
        <h2>{pt.home.greetings}</h2>
        <h1>{pt.home.beforeName} <span>Diego de Almeida Cunha</span></h1>
        <p>{pt.home.description}</p>
      </div>
      <div>
        <a href={pt.home.file} title="Diego Almeida's resumé" target="_blank" rel="noopener noreferrer">
          <button>{pt.home.doc}</button>
        </a>
      </div>
    </HomeContainer>
  )
}