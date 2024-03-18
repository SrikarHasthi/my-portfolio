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
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export const Home = () => {

    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScrollButtonVisiblity = () => {
            window.pageYOffset > 300 ? setShowScrollToTop(true) : setShowScrollToTop(false);
        }


        window.addEventListener('scroll', handleScrollButtonVisiblity);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisiblity);
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };



    const onScroll = () => {
        // This will calculate how many pixels the page is vertically
        const winScroll = document.documentElement.scrollTop;
        // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // This will calculate the final total of the percentage of how much the user has scrolled.
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        // Fires when the document view has been scrolled
        window.addEventListener("scroll", onScroll);

        // 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
                false &&

                <div className="scroll-to-top" onClick={handleScrollToTop}>
                     <CircularProgressbar value={scrollTop} className="scroll-progress-bar"/>
                    <button>
                        <img src={scroll} />
                    </button>

                </div>

            }
        </div>
    );
}
