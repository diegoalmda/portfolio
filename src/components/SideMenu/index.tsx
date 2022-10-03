import { HamburgerMenu, SideMenuContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { HouseLine, LinkedinLogo, List, X } from 'phosphor-react'
import { VscGithub } from 'react-icons/vsc';
import { useState } from "react";

// import OutsideClick from "../../hooks/OutsideClick";

import brFlag from "../../assets/brazil-flag.svg"
import usFlag from "../../assets/usa-flag.svg"
import { useGlobalLanguage } from "../../contexts/GlobalLanguageContext";

export function SideMenu() {
  // const boxRef = useRef(null);
  // const boxOutsideClick = OutsideClick(boxRef);
  
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);

  const { selectedLanguage, selectLanguage } = useGlobalLanguage();

  function handleHamburgerMenuEvent() {
    setHamburgerMenuClicked(!hamburgerMenuClicked)
  }
  
  function handleHideHamburgerMenu() {
    setHamburgerMenuClicked(false)
  }

  function handleSelectLanguage(language: string) {
    selectLanguage(language)
  }

  // useEffect(() => {
  //   if(boxOutsideClick) {
  //     console.log(boxOutsideClick)
  //     setHamburgerMenuClicked(false)
  //   }
  // }, [boxOutsideClick])

  return (
    <>
      <HamburgerMenu className="hamburger-menu" onClick={handleHamburgerMenuEvent}>
        { hamburgerMenuClicked ? <X size={32} /> : <List size={32} /> }        
      </HamburgerMenu>
      <SideMenuContainer active={hamburgerMenuClicked}>
        <div className="content">
          <div className="language-content">
            <p>{selectedLanguage.menu.selectlanguage}</p>
            <button onClick={() => handleSelectLanguage("en")} className={`${selectedLanguage.selected === 'en' ? 'activeLanguage' : ''}`}>
              <img src={usFlag} alt=" United States Flag Icon" />
              <span>EN</span>
            </button>
            <button onClick={() => handleSelectLanguage("pt")} className={`${selectedLanguage.selected === 'pt' ? 'activeLanguage' : ''}`}>
              <img src={brFlag} alt=" United States Flag Icon" />
              <span>PT</span>
            </button>
          </div>
          <div className="logo-content" title="Homepage">
            <NavLink to="/" onClick={handleHideHamburgerMenu}>
              <HouseLine size={20} />
              <span>Diego Almeida</span>
            </NavLink>
          </div>
          <ul>
            { selectedLanguage.menu.items.map(item => {
              return (
                <li key={item.title}>
                  <NavLink to={item.link} title={item.title} onClick={handleHideHamburgerMenu}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="social">
            <a href="https://www.linkedin.com/in/diegoalmda/" target="_blank">
              <LinkedinLogo size={32} />
            </a>
            <a href="https://github.com/diegoalmda" target="_blank">
              <VscGithub size={28} />
            </a>
          </div>
        </div>
      </SideMenuContainer>
    </>
  )
}