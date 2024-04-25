import React from 'react'
import './Project.scss'
import { useInView } from 'react-intersection-observer';
import demo from '../../assets/demo-svgrepo-com.svg';
import code from '../../assets/code-circle-svgrepo-com.svg';
import { Tooltip } from 'react-tooltip';
import ReactGA from 'react-ga4';

interface Props {
    projectDetails: {
        title: string,
        desc: string,
        demoLink: string,
        githubLink: string,
        skills: string,
    }
}

export const ProjectCard = ({ projectDetails }: Props) => {
    const { ref } = useInView({
        threshold: 0,
    });

    const handleProjectClick = (project: string) => {
        ReactGA.event({
            category: 'Button Click',
            action: `clicked ${project}`,
            label: 'header_nav',
        });
    }

    return (
        <>
            <div ref={ref} className={`project-card-main-container`} >
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
                        <a href={projectDetails.demoLink} target='_blank' rel="noreferrer" className='project-card-links' onClick={() => handleProjectClick(`${projectDetails.title} Demo`)}>
                            <img src={demo} alt='demo' data-tooltip-id={"demo-tooltip"} />
                            <Tooltip id={"demo-tooltip"} place="bottom">
                                Demo
                            </Tooltip>
                        </a>
                    }
                    {
                        projectDetails.githubLink !== "" &&
                        <a href={projectDetails.githubLink} target='_blank' rel="noreferrer" className='project-card-links' onClick={() => handleProjectClick(`${projectDetails.title} Github`)}>
                            <img src={code} alt='github' data-tooltip-id={"github-tooltip"} />
                            <Tooltip id={"github-tooltip"} place="bottom">
                                Github
                            </Tooltip>
                        </a>
                    }
                </div>
                <div className='project-card-tech-used-container'>
                    Technologies Used
                </div>
                <div className='project-card-skills-container'>
                    {projectDetails.skills}
                </div>
            </div>
        </>
    )
}
