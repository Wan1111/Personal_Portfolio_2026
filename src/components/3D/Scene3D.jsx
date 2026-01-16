import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

export default function Scene3D({ children, className = '' }) {
  try {
    return (
      <ErrorBoundary>
        <div className={`w-full h-full ${className}`}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </Canvas>
        </div>
      </ErrorBoundary>
    )
  } catch (error) {
    console.error('Scene3D Error:', error)
    return <div className={`w-full h-full ${className}`} />
  }
}
