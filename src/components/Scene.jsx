import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial, Text, PresentationControls, Points, PointMaterial } from '@react-three/drei';
import { useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

const CoffeeCan = ({ mainColor = "#1a1a1a", accentColor = "#39ff14" }) => {
    const meshRef = useRef();
    
    // Create a realistic can profile using Lathe
    const points = useMemo(() => {
        const pts = [];
        // Bottom
        pts.push(new THREE.Vector2(0, -1.5));
        pts.push(new THREE.Vector2(0.8, -1.5));
        pts.push(new THREE.Vector2(0.95, -1.4));
        pts.push(new THREE.Vector2(1, -1.2));
        // Body
        pts.push(new THREE.Vector2(1, 1.2));
        // Top Taper
        pts.push(new THREE.Vector2(0.95, 1.4));
        pts.push(new THREE.Vector2(0.85, 1.5));
        pts.push(new THREE.Vector2(0, 1.5));
        return pts;
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={meshRef}>
            <mesh>
                <latheGeometry args={[points, 64]} />
                <meshStandardMaterial 
                    color={mainColor} 
                    metalness={0.9} 
                    roughness={0.1}
                    emissive={mainColor}
                    emissiveIntensity={0.1}
                />
            </mesh>
            
            {/* Can Tab Detail */}
            <mesh position={[0.3, 1.52, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.1, 0.02, 16, 32]} />
                <meshStandardMaterial color={accentColor} metalness={1} roughness={0.1} />
            </mesh>
        </group>
    );
}

const Sneaker = () => {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
        }
    });

    return (
        <group ref={meshRef} rotation={[0.4, 0.5, 0]}>
            {/* Sole - Layered */}
            <mesh position={[0, -0.8, 0]}>
                <boxGeometry args={[2.5, 0.2, 1.1]} />
                <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.8} />
            </mesh>
            <mesh position={[0, -0.7, 0]}>
                <boxGeometry args={[2.4, 0.1, 1.05]} />
                <meshStandardMaterial color="#ff1493" opacity={0.6} transparent />
            </mesh>

            {/* Main Body - More complex */}
            <mesh position={[-0.2, -0.2, 0]}>
                <boxGeometry args={[1.8, 1, 0.95]} />
                <meshStandardMaterial color="#39ff14" metalness={0.5} roughness={0.2} />
            </mesh>
            
            {/* Heel Wrap */}
            <mesh position={[-1, -0.1, 0]}>
                <cylinderGeometry args={[0.5, 0.4, 0.9, 16]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Tongue */}
            <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, -0.6]}>
                <boxGeometry args={[1.3, 0.2, 0.8]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            
            {/* Accent Stripes */}
            <mesh position={[0.2, -0.2, 0.48]}>
                <boxGeometry args={[1, 0.1, 0.01]} />
                <meshStandardMaterial color="#ff1493" />
            </mesh>
        </group>
    );
}

const CrystalBall = () => {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
            meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
        }
    });

    return (
        <group ref={meshRef}>
            <mesh>
                <sphereGeometry args={[1.2, 64, 64]} />
                <MeshDistortMaterial 
                    color="#39ff14" 
                    speed={2} 
                    distort={0.4} 
                    radius={1}
                    metalness={1}
                    roughness={0}
                    transparent
                    opacity={0.8}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[1.3, 64, 64]} />
                <meshStandardMaterial 
                    color="#ff1493" 
                    wireframe 
                    transparent 
                    opacity={0.1} 
                />
            </mesh>
        </group>
    );
}

const Particles = ({ count = 500 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 20;
            p[i * 3 + 1] = (Math.random() - 0.5) * 20;
            p[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return p;
    }, [count]);

    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00f2ff"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
            />
        </Points>
    );
};

const Scene = ({ modelType = 'can', mainColor, accentColor }) => {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing min-h-[400px]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} />
                
                <Particles />

                <Suspense fallback={null}>
                    <PresentationControls
                        global
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 4, tension: 1500 }}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                    >
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                            {modelType === 'can' && <CoffeeCan mainColor={mainColor} accentColor={accentColor} />}
                            {modelType === 'sneaker' && <Sneaker />}
                            {modelType === 'wizard' && <CrystalBall />}
                        </Float>
                    </PresentationControls>
                </Suspense>

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default Scene;
