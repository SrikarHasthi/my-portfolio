import React, { useState } from 'react'
import './Project.scss'

export const ProjectCard = () => {

  return (
    <div className='project-card-main-container'>
        <div className='project-card-image'>
            
        </div>
        <div className='project-card-title'>
            Resume Builder
        </div>
        <div className='project-card-description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto, itaque iste nihil aperiam laboriosam vitae nam laudantium. Nemo incidunt quidem optio animi sit aliquam suscipit quibusdam ullam corrupti ducimus.
        </div>
        <div className='project-card-links-container'>
            <div className='project-card-links'>Demo</div>
            <div className='project-card-links'>Github</div>
        </div>
    </div>
  )
}
