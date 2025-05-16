import React, { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

const FinancialBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
        }}>
            <Particles
                id="financial-particles"
                init={particlesInit}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                }}
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: "#0f172a" } },
                    fpsLimit: 120,
                    particles: {
                        color: { value: ["#05D5FF", "#00FF9D", "#FFE700", "#FF7300"] },
                        links: {
                            color: "#05D5FF",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: { enable: true },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 80,
                        },
                        opacity: { value: 0.7 },
                        shape: { type: ["circle", "triangle"] },
                        size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: true,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                }}
            />
        </div>
    );
};

export default FinancialBackground;
