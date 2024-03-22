import { useEffect, useState } from "react";
import "./App.scss";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import { Project } from "./components/Project/Project";

import { Footer } from "./components/Footer/Footer";

import 'react-circular-progressbar/dist/styles.css';

export const Home = () => {





    return (
        <div>
            <Header />
            <Intro />
            <Project />
            <AboutMe />
            <Experience />
            <Contact />
            <Footer />

        </div>
    );
}
