import React, { useEffect, useState } from 'react'
import './Project.scss'
import { ProjectCard } from './ProjectCard'
import ScrollAnimation from 'react-animate-on-scroll'
import { projectDetails } from '../../StaticData'
import { CircularProgressbar } from "react-circular-progressbar";
import scroll from '../../assets/scrollToTop.svg'

export const Project = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 300 ? setShowScrollToTop(true) : setShowScrollToTop(false);
    }


    window.addEventListener('scroll', handleScrollButtonVisiblity);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };



  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    // 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className='project-main-container' id="project">
      <div className='project-heading-conatiner'>
        Projects
      </div>
      <div className='projects-container'>
        {
          projectDetails.map((e, id) => {

            return (
              <div key={id} style={{ overflow: "hidden" }}>
                <ScrollAnimation animateIn="pulse">
                  <ProjectCard projectDetails={e} />
                </ScrollAnimation>
              </div>
            )
          })
        }
      </div>
      {
        showScrollToTop &&

        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <CircularProgressbar value={scrollTop} className="scroll-progress-bar" />
          <button>
            <img src={scroll} alt='scrolltotop'/>
          </button>

        </div>

      }
    </div>
  )
}
