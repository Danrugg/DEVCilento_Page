"use client";

import { useEffect, useState, useRef } from "react";

export default function CircuitBackground() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [pathD, setPathD] = useState("");
    const [pathLeftD, setPathLeftD] = useState("");
    const pathRef = useRef<SVGPathElement>(null);
    const pathRefLeft = useRef<SVGPathElement>(null);

    // Track scroll
    useEffect(() => {
        const handleScroll = () => {
            if (pathRef.current) {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = Math.max(1, document.documentElement.scrollHeight);
                const maxScroll = Math.max(1, documentHeight - windowHeight);
                const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

                // MAGIA EXPONENCIAL AQUÍ:
                // Usamos Math.pow para crear una curva de aceleración.
                // Si quieres que dispare rápido al principio y luego frene suavemente al llegar al fondo (Ease-Out):
                const expoProgress = 1 - Math.pow(1 - scrollProgress, 2);

                // (Alternativa: Si prefieres que empiece lento y acelere brutalmente al final (Ease-In), usa esto en su lugar):
                // const expoProgress = Math.pow(scrollProgress, 3);

                const startFactor = 0;
                const endFactor = 0.99;

                // ATENCIÓN: Aquí cambiamos scrollProgress por expoProgress
                const dynamicFactor = startFactor + ((endFactor - startFactor) * expoProgress);
                const currentPosition = scrollY + (windowHeight * dynamicFactor);

                // Clamp percentage between 0 and 1
                const pct = Math.min(1, Math.max(0, currentPosition / documentHeight));

                const length = pathRef.current.getTotalLength();
                // Ensure strokeDasharray covers the entire length
                pathRef.current.style.strokeDasharray = `${length}`;
                // Offset shifts down to 0 as pct approaches 1
                pathRef.current.style.strokeDashoffset = `${length * (1 - pct)}`;
            }

            // --- LOGICA LINEA SINISTRA (PATH 2) ---
            if (pathRefLeft.current) {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = Math.max(1, document.documentElement.scrollHeight);
                const maxScroll = Math.max(1, documentHeight - windowHeight);
                const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

                const triggerProgress = 0.40;
                let localProgress2 = 0;

                if (scrollProgress >= triggerProgress) {
                    localProgress2 = Math.min(1, (scrollProgress - triggerProgress) / (1 - triggerProgress));
                }

                // Stesso effetto esponenziale usato per la prima
                const expoProgressLeft = 1 - Math.pow(1 - localProgress2, 2);

                const lengthLeft = pathRefLeft.current.getTotalLength();
                pathRefLeft.current.style.strokeDasharray = `${lengthLeft}`;
                pathRefLeft.current.style.strokeDashoffset = `${lengthLeft * (1 - expoProgressLeft)}`;
            }
        };

        handleScroll(); // Initial position
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathD]); // Re-bind if path changes

    // Update dimensions and procedural path
    useEffect(() => {
        const updateDims = () => {
            const w = document.documentElement.scrollWidth;
            const h = Math.max(document.documentElement.scrollHeight, window.innerHeight);
            setDimensions({ width: w, height: h });

            const isMobile = w < 768;
            // Destinazione principale sul margine destro (95% mobile, 85% desktop)
            const rightMargin = isMobile ? w * 0.95 : w * 0.85; 

            // Punto di partenza dall'alto, spostato un po' dal centro
            let d = `M ${w * 0.6} 0`;
            let currentX = w * 0.6;
            let currentY = 0;

            // Creazione di curve morbide di Bézier scendendo per la pagina
            const segments = Math.max(3, Math.floor(h / 400)); 
            for (let i = 1; i <= segments; i++) {
                const targetY = (h / segments) * i;
                
                // Mantiene la linea sul margine destro con un'oscillazione molto dolce
                const wobble = isMobile ? (w * 0.01) : (w * 0.03);
                const targetX = rightMargin + (Math.sin(i * 1.5) * wobble);

                // Punti di controllo per la curva C per una discesa molto fluida
                const cp1X = currentX;
                const cp1Y = currentY + (targetY - currentY) * 0.4;
                const cp2X = targetX;
                const cp2Y = currentY + (targetY - currentY) * 0.6;

                d += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${targetX} ${targetY}`;
                
                currentX = targetX;
                currentY = targetY;
            }
            // Chiusura fine corsa oltre il fondo
            d += ` L ${currentX} ${h + 200}`;

            setPathD(d);

            // --- DISEGNO LINEA SINISTRA (CONVERGENTE) ---
            const leftStart = isMobile ? w * 0.05 : w * 0.15;
            let dLeft = `M ${leftStart} 0`;
            let currentXLeft = leftStart;
            let currentYLeft = 0;
            
            // Punto di convergenza: quasi tocca la linea destra
            const marginOffset = isMobile ? 20 : 50;
            const leftEndTarget = rightMargin - marginOffset; 

            for (let i = 1; i <= segments; i++) {
                const targetY = (h / segments) * i;
                const progressRatio = i / segments;
                
                // Convergenza verso rightMargin
                const baseTargetX = leftStart + (leftEndTarget - leftStart) * progressRatio;
                
                // Oscillazione minore per evitare accavallamenti su testi
                const wobbleLeft = isMobile ? (w * 0.01) : (w * 0.02);
                const targetXLeft = baseTargetX + (Math.cos(i * 1.2) * wobbleLeft);

                const cp1XLeft = currentXLeft;
                const cp1YLeft = currentYLeft + (targetY - currentYLeft) * 0.4;
                const cp2XLeft = targetXLeft;
                const cp2YLeft = currentYLeft + (targetY - currentYLeft) * 0.6;

                dLeft += ` C ${cp1XLeft} ${cp1YLeft}, ${cp2XLeft} ${cp2YLeft}, ${targetXLeft} ${targetY}`;
                
                currentXLeft = targetXLeft;
                currentYLeft = targetY;
            }
            // Fine corsa per Path Sinistro
            dLeft += ` L ${currentXLeft} ${h + 200}`;
            
            setPathLeftD(dLeft);
        };

        updateDims();
        window.addEventListener('resize', updateDims, { passive: true });

        // Setup ResizeObserver to catch hydration layout shifts
        const observer = new ResizeObserver(updateDims);
        observer.observe(document.body);

        return () => {
            window.removeEventListener('resize', updateDims);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-10]">
            {/* Base Static Grid - Zinc 100 on White */}
            <div
                className="fixed inset-0 bg-white"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #f4f4f5 1px, transparent 1px),
                        linear-gradient(to bottom, #f4f4f5 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* SVG Draw-on-Scroll Circuit Line */}
            {pathD && (
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    width={dimensions.width}
                    height={dimensions.height}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        ref={pathRef}
                        d={pathD}
                        fill="none"
                        stroke="#27272a" // zinc-800 (grafito puro)
                        strokeWidth={dimensions.width < 768 ? "1" : "2"}
                        strokeLinejoin="round" // Curve morbide
                        strokeLinecap="round"
                        style={{
                            transition: 'stroke-dashoffset 0.1s linear', // Smooth the draw slightly
                            opacity: dimensions.width < 768 ? 0.3 : 1
                        }}
                    />
                    {pathLeftD && (
                        <path
                            ref={pathRefLeft}
                            d={pathLeftD}
                            fill="none"
                            stroke="#27272a" 
                            strokeWidth={dimensions.width < 768 ? "1" : "2"}
                            strokeLinejoin="round" 
                            strokeLinecap="round"
                            style={{
                                transition: 'stroke-dashoffset 0.1s linear',
                                opacity: dimensions.width < 768 ? 0.15 : 1 // Su mobile più opaco per non disturbare la lettura
                            }}
                        />
                    )}
                </svg>
            )}
        </div>
    );
}
