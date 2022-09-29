import { SideMenuContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { DesktopTower, LinkedinLogo } from 'phosphor-react'
import { VscGithub } from 'react-icons/vsc';

export function SideMenu() {
  return (
    <SideMenuContainer>
      <div className="logo-content" title="Homepage">
        <NavLink to="/">
         <div><DesktopTower size={32} /></div>
          <h1>Diego Almeida</h1>
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/about" title="">
            <p>About</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" title="">
            <p>My Skills</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" title="">
            <p>Projects</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" title="">
            <p>Contact</p>
          </NavLink>
        </li>
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
  )
}