import React, { useState } from 'react'
import './Project.scss'
import { useInView } from 'react-intersection-observer';

interface Props {
    projectDetails: {
        title: string,
        desc: string,
        demoLink: string,
        githubLink: string,
    }
}

export const ProjectCard = ({ projectDetails }: Props) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });


    return (
        <>
                <div ref={ref} className={`project-card-main-container ${inView ? "project-card-main-container-animation" : ""}`} >
                    {/* <div className='project-card-image'>
        </div> */}
                    <div className='project-card-title'>
                        {projectDetails.title}
                    </div>
                    <div className='project-card-description'>
                        {projectDetails.desc}
                    </div>
                    <div className='project-card-links-container'>
                        {
                            projectDetails.demoLink !== "" &&
                            <a href={projectDetails.demoLink} target='_blank' className='project-card-links'>Demo</a>
                        }
                        {
                            projectDetails.githubLink !== "" &&
                            <a href={projectDetails.githubLink} target='_blank' className='project-card-links'>Github</a>
                        }
                    </div>
                </div>
        </>
    )
}
