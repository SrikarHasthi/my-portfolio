import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import './Footer.scss';
import { loadFull } from "tsparticles";
import particlesOptions2 from "../../footerParticles.json";
import { ISourceOptions } from "@tsparticles/engine";
import bye from '../../assets/Byeee-removebg-preview.png'


export const Footer = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        <div className="footer-main-container">
            {init && (
                <div style={{ height: "25rem", position: "relative" }}>
                    <Particles id="tsparticle2"
                        options={particlesOptions2 as unknown as ISourceOptions}
                    />
                    <img className="moving-img" src={bye} style={{ left: '500px' }}/>
                </div>

            )}
            <div className="custom-shape-divider-bottom-1710214192">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}