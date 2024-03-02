import "./App.scss";
import { Header } from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";
import { Project } from "./components/Project/Project";

export const Home = () => {
    return (
        <div>
            <Header/>
            <Intro/>
            <Project/>
        </div>
    );
}
