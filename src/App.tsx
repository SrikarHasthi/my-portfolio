import "./App.scss";
import { Home } from "./Home";
import ReactGA from 'react-ga4';
import { useEffect } from "react";


const App = () => {
    ReactGA.initialize('G-JWWSQ20ECM');

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
