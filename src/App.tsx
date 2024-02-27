import "./App.scss";
import { Header } from "./components/Header/Header";
import Intro from "./components/Introduction/Intro";

function App() {
    return (
        <div className="App">
            <Header/>
            <Intro/>
        </div>
    );
}

export default App;
