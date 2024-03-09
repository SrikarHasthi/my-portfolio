import React, { useState } from 'react'
import './Project.scss'
import { ProjectCard } from './ProjectCard'
import { projectDetails } from './ProjectDetails'
import ScrollAnimation from 'react-animate-on-scroll'

export const Project = () => {
  console.log(projectDetails);

  return (
    <div className='project-main-container'>
      <div className='project-heading-conatiner'>
        Projects
      </div>
      <div className='projects-container'>
        {
          projectDetails.map((e, key) => {
            console.log(e)

            return (
              <ScrollAnimation animateIn="pulse">
                <ProjectCard projectDetails={e} />
              </ScrollAnimation>
            )
          })
        }
      </div>
    </div>
  )
}
