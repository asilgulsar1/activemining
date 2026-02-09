"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stage, Environment, Float, Center, Html, useProgress } from "@react-three/drei";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import * as THREE from "three";

// Preload the model
// Preload removed to prevent blocking (25MB file)
// useGLTF.preload("/ant_miner_s19_pro.glb");

function Model({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const { scene } = useGLTF("/ant_miner_s19_pro.glb");
    const modelRef = useRef<THREE.Group>(null);
    const { camera } = useThree();

    // Set initial camera position
    useMemo(() => {
        camera.position.set(0, 0, 5);
    }, [camera]);

    useFrame((state) => {
        const scroll = scrollYProgress.get();

        // Animation Logic
        // Phase 1 (0-0.4): Rotate Side to Front
        // Phase 2 (0.4-0.7): Zoom In
        // Phase 3 (0.7-1.0): Reset / Pull Back

        if (modelRef.current) {
            // Base Rotation (Constant spin for life?) No, controlled by scroll.
            // 0 -> Side view (Rotation Y = 1.5)
            // 0.4 -> Front view (Rotation Y = 0)

            let targetRotY = 1.5; // Side
            let targetPosZ = 0;   // Zoom level (Model position, or move camera)
            let targetPosY = 0;

            if (scroll < 0.4) {
                // Rotate from 1.5 to 0
                const t = scroll / 0.4;
                targetRotY = 1.5 * (1 - t);
                targetPosZ = 0;
            } else if (scroll < 0.7) {
                // Zoom in: Move camera or model? 
                // Let's move Model closer to camera (increase Z) or Camera closer (decrease Z)
                const t = (scroll - 0.4) / 0.3;
                targetRotY = 0; // Stay Front
                targetPosZ = 3.5 * t; // Move model closer (max Z=3.5)
                targetPosY = -1 * t; // Move model down slightly to center fans
            } else {
                // Reset
                const t = (scroll - 0.7) / 0.3;
                targetRotY = 0;
                targetPosZ = 3.5 * (1 - t);
                targetPosY = -1 * (1 - t);
            }

            // Apply transforms smoothly (Lerp could be added, but scroll is usually smooth enough)
            modelRef.current.rotation.y = targetRotY;
            modelRef.current.position.z = targetPosZ;
            modelRef.current.position.y = targetPosY;

            // Add slight floating effect for "alive" feel
            // modelRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.05;
        }
    });

    return (
        <primitive
            object={scene}
            ref={modelRef}
            scale={0.5}
            rotation={[0, 1.5, 0]}
        />
    );
}

// Custom Loader Component
function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center bg-black/80 p-8 rounded-xl backdrop-blur-md border border-[var(--sovereign-gray)]">
                <div className="text-[var(--sovereign-gold)] text-4xl font-bold mb-2">
                    {progress.toFixed(0)}%
                </div>
                <div className="text-white text-sm font-medium tracking-widest uppercase">
                    Loading Model
                </div>
                <div className="w-48 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden">
                    <div
                        className="h-full bg-[var(--sovereign-gold)] transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </Html>
    )
}

export function ScrollMiner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10 w-full h-full">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
                        <Suspense fallback={<Loader />}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                            <Environment preset="city" />

                            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                                <Center position={[0, -0.25, 0]}>
                                    <Model scrollYProgress={scrollYProgress} />
                                </Center>
                            </Float>
                        </Suspense>
                    </Canvas>
                </div>
                {/* Feature Text Overlays - Same logic as before */}
                <FeatureText scrollYProgress={scrollYProgress} range={[0.1, 0.3]} text="Next-Gen 5nm Chips" align="left" description="Unmatched efficiency." />
                <FeatureText scrollYProgress={scrollYProgress} range={[0.4, 0.6]} text="Dual-Fan Aero Cooling" align="right" description="Cryogenic cooling architecture." />
                <FeatureText scrollYProgress={scrollYProgress} range={[0.7, 0.9]} text="140 TH/s Performance" align="left" description="Industrial-grade reliability." />
            </div>
        </section>
    );
}

function FeatureText({ scrollYProgress, range, text, align, description }: { scrollYProgress: any, range: [number, number], text: string, align: 'left' | 'right', description?: string }) {
    const opacity = useTransform(scrollYProgress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        align === 'left' ? [-50, 0, 0, -50] : [50, 0, 0, 50]
    );

    return (
        <motion.div
            style={{ opacity, x }}
            className={`absolute top-1/2 -translate-y-1/2 ${align === 'left' ? 'left-[10%] text-left' : 'right-[10%] text-right'} max-w-sm z-50 pointer-events-none`}
        >
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">{text}</h3>
            <div className={`h-1 w-24 bg-[var(--sovereign-emerald)] mb-4 ${align === 'left' ? 'mr-auto' : 'ml-auto'}`} />
            {description && <p className="text-xl text-gray-200 font-medium drop-shadow-md">{description}</p>}
        </motion.div>
    )
}
