import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
// @ts-ignore
import resume from '../../assets/Srikar_Hasthi_Resume.pdf';
import "./Header.scss";
import ReactGA from 'react-ga4';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const headerNav = (name:string) =>{
    ReactGA.event({
      category: 'Button Click',
      action: `clicked ${name}`,
      label: 'header_nav',
    });
    closeMenu();
  }

  const closeMenu = () => {
    setIsActive(false)
  }

  return (
    <div className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>Srikar</span>
          <span> Hasthi</span>
        </HashLink>


        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={()=>headerNav("home")}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={()=>headerNav("project")}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#aboutMe" onClick={()=>headerNav("aboutMe")}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={()=>headerNav("experience")}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#education" onClick={()=>headerNav("education")}>
            Education
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={()=>headerNav("contact")}>
            Contact
          </NavHashLink>
          <a href={resume} download="Srikar_Hasthi_Resume.pdf" className="button" onClick={()=>headerNav("resume")}>
            Resume 
          </a>
        </nav>

        <div
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setIsActive(!isActive)
          }}
        ></div>
      </Router>
    </div>
  )
}
