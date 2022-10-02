import { HamburgerMenu, SideMenuContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { HouseLine, LinkedinLogo, List } from 'phosphor-react'
import { VscGithub } from 'react-icons/vsc';
import { useState } from "react";
import { portfolioContent } from "../../languages/portfolioContent";

import brFlag from "../../assets/brazil-flag.svg"
import usFlag from "../../assets/usa-flag.svg"

export function SideMenu() {
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);

  const { pt, en } = portfolioContent

  function handleHamburgerMenuEvent() {
    setHamburgerMenuClicked(!hamburgerMenuClicked)
  }

  return (
    <>
      <HamburgerMenu className="hamburger-menu" onClick={handleHamburgerMenuEvent}>
        <List size={32} />
      </HamburgerMenu>
      <SideMenuContainer active={hamburgerMenuClicked}>
        <div className="language-content">
          <p>{pt.menu.selectlanguage}</p>
          <button>
            <img src={usFlag} alt=" United States Flag Icon" />
            <span>EN</span>
          </button>
          <button>
            <img src={brFlag} alt=" United States Flag Icon" />
            <span>PT</span>
          </button>
        </div>
        <div className="logo-content" title="Homepage">
          <NavLink to="/">
            <HouseLine size={20} />
            <span>Diego Almeida</span>
          </NavLink>
        </div>
        <ul>
          { pt.menu.items.map(item => {
            return (
              <li key={item.title}>
                <NavLink to={item.link} title={item.title}>
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
      </SideMenuContainer>
    </>
  )
}