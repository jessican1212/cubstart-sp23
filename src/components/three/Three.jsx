import React from 'react'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import styles from './page.module.css'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "content/home-model.gltf");
    return (
      <>
        <primitive object={gltf.scene} />
      </>
    );
  };

const Three = () => {
  return (
    <div className={styles.globe}>
        <Canvas id={styles.canvas} shadows camera={{ fov: 52, position: [3.5,1,4] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="forest" />
          </Suspense>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>
  )
}

export default Three