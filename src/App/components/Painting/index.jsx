import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import paintingGlb from "./assets/Painting.glb";

const Painting = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(paintingGlb, true)
    return (
      <group ref={group}dispose={null}>
        <group
          position={[-3.71, 2.96, 3.03]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.88, 0.56, -0.02]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials['Material.013']}
          />
        </group>
      </group>
    )
  }

export default Painting;
