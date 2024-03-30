import "./App.scss";
import { Home } from "./Home";
import ReactGA from 'react-ga4';
import { useEffect } from "react";
ReactGA.initialize('G-JWWSQ20ECM');


const App = () => {

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
