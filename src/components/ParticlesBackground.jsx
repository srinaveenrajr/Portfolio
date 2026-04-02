import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);
    if (!init)
        return null;
    return (<Particles id="tsparticles" options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
                color: { value: "hsl(217, 91%, 53%)" },
                links: {
                    color: "hsl(217, 91%, 53%)",
                    distance: 150,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: "none",
                    outModes: { default: "bounce" },
                },
                number: { density: { enable: true }, value: 40 },
                opacity: { value: 0.2 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        }} className="absolute inset-0 pointer-events-none z-0"/>);
};
export default ParticlesBackground;
