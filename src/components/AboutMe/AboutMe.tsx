import React, { useState } from 'react'
import './AboutMe.scss'
import meditation from '../../assets/Meditation-bro.svg'
import { Skills } from './Skills'
import { Tooltip } from 'react-tooltip'
import 'animate.css';
import { useInView } from 'react-intersection-observer'
export const AboutMe = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
      });
    return (
        <div className='about-me-main-conatainer'>
            <div ref={ref} className={`about-me-container ${inView && "animate__animated animate__fadeInLeft"}`}>
                <h2>Who I am</h2>
                <p>
                    Hey there, I'm Srikar Hasthi, a Software Developer fueled by a love for creating tech solutions that matter. With a knack for JavaScript, Java, Python, and more, I dive deep into web development, specializing in React.js and Node.js.
                    <br /><br />

                    When I'm not coding, you'll catch me exploring new tech, jamming at hackathons, and diving into open-source projects. I'm all about using tech for good and love teaming up with fellow enthusiasts.
                    <br /><br />

                    But life isn't all about code! When I'm not immersed in the digital world, you can find me indulging in my other passions, whether it's hiking in the great outdoors or trying out new recipes in the kitchen. I believe in finding balance in life and bringing that same sense of balance to my work as a developer.
                    <br /><br />

                    Currently, I'm expanding my skill set into full-stack development, diving into Java Spring for backend expertise. I'm excited about this journey and the opportunities it brings to create comprehensive solutions from end to end.
                    <br /><br />

                    Ready to dive into my world of code? Let's connect and create something awesome together!
                </p>
                <h3>Here are my main skills: </h3>
                <div className='about-me-skills-container'>
                    {
                        Skills.map((e, key) => {
                            return (
                                <>
                                    <div data-tooltip-id={"skills-tooltip" + key} className='about-me-skills'>
                                        <img src={e.src} />
                                    </div>
                                    <Tooltip id={"skills-tooltip" + key} place="bottom">
                                        {e.name}
                                    </Tooltip>
                                </>
                            )
                        })
                    }

                </div>
            </div>
            <div className={`about-me-image ${inView && "animate__animated animate__fadeInRight"}`}>
                <img src={meditation} />
            </div>

        </div>
    )
}
