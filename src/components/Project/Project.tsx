import React from 'react'
import './Project.scss'
import { ProjectCard } from './ProjectCard'
import ScrollAnimation from 'react-animate-on-scroll'
import { projectDetails } from '../../StaticData'

export const Project = () => {

  return (
    <div className='project-main-container' id="project">
      <div className='project-heading-conatiner'>
        Projects
      </div>
      <div className='projects-container'>
        {
          projectDetails.map((e, id) => {

            return (
              <div key={id} style={{overflow:"hidden"}}>
              <ScrollAnimation animateIn="pulse">
                <ProjectCard projectDetails={e} />
              </ScrollAnimation>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
