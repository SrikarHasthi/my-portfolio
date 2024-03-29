import React from 'react';
import education from '../../assets/Learning-bro.svg';
import concordia from '../../assets/concordia_university_0.webp';
import lpu from '../../assets/Lovely_Professional_University_logo.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { Tooltip } from 'react-tooltip';
import './Education.scss';

export const Education = () => {
    return (
        <div className='education-main-container' id="education">
            <div className={`education-container`}>
                <h2>Education</h2>
                <ScrollAnimation animateIn="fadeInLeft">
                    <div className='education-university-container'>
                        <div className='education-university'>
                            <div className='education-university-image'>
                                <img src={concordia} alt='concordia'/>
                            </div>
                            <div className='education-university-details'>
                                <div className='education-university-title'>Concordia University</div>
                                <div className='education-university-degree'>Masters in Software Engineering</div>
                                <div className='education-university-duration'>Sep 2022 - Dec 2023</div>
                            </div>
                        </div>
                        <div className='education-university-border'></div>
                        <div className='education-university'>
                            <div className='education-university-image'>
                                <img src={lpu} alt='lpu'/>
                            </div>
                            <div className='education-university-details'>
                                <div className='education-university-title'>Lovely Professional University</div>
                                <div className='education-university-degree'>Bachelors in Computer Science</div>
                                <div className='education-university-duration'>Sep 2017 - Aug 2021</div>
                            </div>
                        </div>
                        <div className='education-university-border'></div>

                    </div>
                </ScrollAnimation>
            </div>
            <div className="education-image">
                <ScrollAnimation animateIn="fadeInRight" className='education-imagee'>
                    <img src={education} data-tooltip-id="education-image-tooltip" alt='education' />
                    <Tooltip id="education-image-tooltip" place="bottom" className='education-image-tooltip' >
                        {"Credit: storyset.com"}
                    </Tooltip>
                </ScrollAnimation>
            </div>
        </div>
    )
}
