import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
// @ts-ignore
import resume from '../../assets/Srikar_Hasthi_Resume.pdf';
import "./Header.scss";

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  function closeMenu() {
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
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#aboutMe" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#education" onClick={closeMenu}>
            Education
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={resume} download="Srikar_Hasthi_Resume.pdf" className="button">
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
