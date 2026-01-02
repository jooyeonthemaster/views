"use client"

import * as React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment, Stars } from "@react-three/drei"
import * as THREE from "three"

function Core() {
    const meshRef = React.useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.x = t * 0.2
        meshRef.current.rotation.y = t * 0.3
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="cyan"
                    emissive="cyan"
                    emissiveIntensity={0.5}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
            <mesh scale={1.8}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color="#00f3ff"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    metalness={0.8}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    )
}

function Particles() {
    return (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    )
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="#bd00ff" intensity={5} />
                <Core />
                <Particles />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                <Environment preset="city" />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>
    )
}
