import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "../../App.scss";
import "./Intro.scss"
import particlesOptions from "../../particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { TypeAnimation } from "react-type-animation";
import ScrollDownSvg from "../../assets/scroll-down.svg"
import 'animate.css';
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { introSocialIcons } from "../../StaticData";

const Intro = () => {
    const [init, setInit] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App" id="home">
            {init && (
                <div style={{ height: "74rem" }}>
                    <Particles
                        options={particlesOptions as unknown as ISourceOptions}
                    />

                    <div className="main-intro-text animate__animated animate__fadeInUp">
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'Hi, I\'m Srikar.',
                                () => setShowSubtitle(true)
                            ]}
                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            wrapper="h1"
                            repeat={0}
                        />
                        {showSubtitle &&
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    500,
                                    'A Front-End Developer.',
                                    1000,
                                    'A Master\'s Degree Graduate.',
                                    // 'I design and code beautifully simple things, and I love what I do.',
                                    1000,
                                    'A problem solver.',
                                    1000,
                                    'An innovative thinker.',
                                    1000,
                                    'A....',
                                    1000,
                                    'A.... cool guy?',
                                    1000,
                                    "Ok...",
                                    1000,
                                    "Ok...  I'm running out of ideas...",
                                    1000,
                                    "Uhh...",
                                    1000,
                                    "Uhh... you can scroll down to see my projects now...",
                                    300,
                                    () => setShowScrollDown(true),
                                    1000,
                                    "Seriously, my projects are really cool, go check them out!",
                                    1000,
                                    "You're uh...",
                                    1000,
                                    "You're uh... still here?",
                                    1000,
                                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                                    // 1000,
                                    // "Or...",
                                    // 1000,
                                    // "Or... I could scroll you by force! Muahaha!",
                                    1000,
                                    "See ya! :)",
                                    500,
                                    () => setShowScrollDown(false),
                                ]}
                                speed={50}
                                deletionSpeed={65}
                                wrapper="h3"
                                repeat={Infinity}
                            />
                        }
                    </div>
                    {
                        showScrollDown &&
                        <BrowserRouter>
                            <NavHashLink smooth to="#project" >
                                <div className="scroll-down-container animate__animated animate__headShake">
                                    Scroll down
                                    <img
                                        src={ScrollDownSvg}
                                        alt="scroll-down"
                                    />
                                </div>
                            </NavHashLink>
                        </BrowserRouter>

                    }

                    <div className="main-intro-contact-container">
                        <div className="main-intro-contact-button  animate__animated animate__fadeInUp animate__delay-1s">
                            <BrowserRouter>
                                <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
                            </BrowserRouter>
                        </div>
                        <div className="main-intro-contact-icons  animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="social-media">
                                {
                                    introSocialIcons.map((e, id) => {
                                        return <a
                                            href={e.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={id}
                                        >
                                            <img src={e.img} alt={e.img} />
                                        </a>
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div className="custom-shape-divider-top-1706220601">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>

                </div>
            )}
            {/* <header className="App-header">
            </header> */}

        </div>
    );
}

export default Intro;
