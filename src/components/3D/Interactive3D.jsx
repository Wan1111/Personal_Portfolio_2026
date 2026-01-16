import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

function TechIcon({ position, rotation, children, color = '#0284c7' }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial
        color={hovered ? '#0ea5e9' : color}
        emissive={hovered ? '#38bdf8' : '#000000'}
        emissiveIntensity={hovered ? 0.5 : 0}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// FloatingText component removed - using geometric shapes instead for better performance

export default function Interactive3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />

      <TechIcon position={[-2, 1, 0]} rotation={[0, 0, 0]} color="#f59e0b" />
      <TechIcon position={[2, 1, 0]} rotation={[0, 0, 0]} color="#3b82f6" />
      <TechIcon position={[0, -1, 0]} rotation={[0, 0, 0]} color="#10b981" />
      <TechIcon position={[-1, -1.5, 1]} rotation={[0, 0, 0]} color="#8b5cf6" />
      <TechIcon position={[1, -1.5, 1]} rotation={[0, 0, 0]} color="#ef4444" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}
