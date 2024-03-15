import { useEffect, useState } from "react";
import "./App.scss";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import { Project } from "./components/Project/Project";
import scroll from './assets/scrollToTop.svg'
import { Footer } from "./components/Footer/Footer";

export const Home = () => {

    const [showScrollToTop, setShowScrollToTop] = useState(false);
    useEffect(() => {
        const handleScrollButtonVisiblity = () => {
            window.pageYOffset > 300 ? setShowScrollToTop(true) : setShowScrollToTop(false);
        }


        window.addEventListener('scroll', handleScrollButtonVisiblity);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisiblity);
        }
    }, [])

    const handleScrollToTop = () =>{
        window.scrollTo({top: 0, behavior:'smooth'})
    };

    return (
        <div>
            <Header />
            <Intro />
            <Project />
            <AboutMe />
            <Experience />
            <Contact />
            <Footer />
            {
                showScrollToTop && 
                    <div className="scroll-to-top" onClick={handleScrollToTop}>
                        <button>
                            <img src={scroll}/>
                        </button>
                    </div>
                
            }
        </div>
    );
}
