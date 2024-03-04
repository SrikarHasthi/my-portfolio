import React, { useState } from 'react'
import './Project.scss'
import { ProjectCard } from './ProjectCard'
import { projectDetails } from './ProjectDetails'

export const Project = () => {
  console.log(projectDetails);
  
  return (
    <div className='project-main-container'>
        <div className='project-heading-conatiner'>
            Projects
        </div>
        <div className='projects-container'>
          {
            projectDetails.map((e, key)=>{
              console.log(e)
              
              return <ProjectCard projectDetails={e} />
            })
          }
        </div>
    </div>
  )
}
