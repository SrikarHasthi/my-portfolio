import React, { useState } from 'react'
import './Project.scss'
import { ProjectCard } from './ProjectCard'

export const Project = () => {

  return (
    <div className='project-main-container'>
        <div className='project-heading-conatiner'>
            Projects
        </div>
        <div className='projects-container'>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
    </div>
  )
}
