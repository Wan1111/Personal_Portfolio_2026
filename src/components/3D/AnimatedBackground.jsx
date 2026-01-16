import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function DistortedSphere({ position, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        opacity={0.3}
        transparent
      />
    </Sphere>
  )
}

function FloatingGeometry({ position, geometry, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        wireframe
        opacity={0.2}
        transparent
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export default function AnimatedBackground() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />

      <DistortedSphere position={[-3, 0, -5]} color="#0284c7" speed={0.5} />
      <DistortedSphere position={[3, 0, -5]} color="#0ea5e9" speed={0.3} />
      <DistortedSphere position={[0, 2, -5]} color="#38bdf8" speed={0.4} />

      <FloatingGeometry
        position={[-2, -1, -3]}
        geometry={<tetrahedronGeometry args={[0.5, 0]} />}
        color="#0284c7"
        speed={1.5}
      />
      <FloatingGeometry
        position={[2, -1, -3]}
        geometry={<octahedronGeometry args={[0.5, 0]} />}
        color="#0ea5e9"
        speed={1.2}
      />
      <FloatingGeometry
        position={[0, 1, -3]}
        geometry={<dodecahedronGeometry args={[0.4, 0]} />}
        color="#38bdf8"
        speed={1}
      />
    </>
  )
}
