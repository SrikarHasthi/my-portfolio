import React from 'react'
import { Tooltip } from 'react-tooltip'
import working from '../../assets/Working.svg'
import loading from '../../assets/loading-svgrepo-com.svg'
import './Experience.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import { ExperienceSkillsbadge } from './ExperienceSkillsBadge';
import { animakerSkills, ctsSkills, fyntuneSkills } from '../../StaticData'

export const Experience = () => {

    return (
        <div className='experience-main-conatainer'  id='experience'>
            <div className="experience-image">
                <ScrollAnimation animateIn="fadeInLeft" className='experience-imagee'>
                    <img src={working} data-tooltip-id="experience-image-tooltip" alt='working'/>
                    <Tooltip id="experience-image-tooltip" place="bottom" className='experience-image-tooltip' >
                        {""}
                    </Tooltip>
                </ScrollAnimation>
            </div>
            <div className={`experience-container`}>
                <h2>Experience</h2>
                <ScrollAnimation animateIn="fadeInRight">
                    <div className="timeline">
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="container left">
                                <div className="content">
                                    <h3>Software Developer</h3>
                                    <h4>Animaker Inc.</h4>
                                    <h5>09/2021-08/2022</h5>
                                    <div className='experience-container-skills'>
                                        <ExperienceSkillsbadge skills={animakerSkills} />
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="container right">
                                <div className="content">
                                    <h3>Software Developer Intern</h3>
                                    <h4>Cognizant Technology Solutions</h4>
                                    <h5>03/2021-08/2021</h5>
                                    <div className='experience-container-skills'>
                                        <ExperienceSkillsbadge skills={ctsSkills} />
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="container left">
                                <div className="content">
                                    <h3>Full Stack Developer</h3>
                                    <h4>Fyntune Solutions Pvt Ltd.</h4>
                                    <h5>08/2020-01/2021</h5>
                                    <div className='experience-container-skills'>
                                        <ExperienceSkillsbadge skills={fyntuneSkills} />
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="container">
                                <img className='timeline-loading-image' src={loading} alt='loading'/>
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
            </div>


        </div>
    )
};