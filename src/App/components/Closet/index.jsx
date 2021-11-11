import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import closetGlb from "./assets/Closet.glb";

const Closet = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(closetGlb, true)
    return (
      <group ref={group} dispose={null}>
        <group position={[-2.96, 1.47, -2.97]} scale={[0.68, 1.2, 0.68]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials['Material.048']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials['Material.052']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.doos.geometry}
          material={materials['Material.054']}
          position={[-2.82, 3.95, -2.66]}
          rotation={[0, Math.PI / 6, 0]}
          scale={[0.45, -0.12, 0.45]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sticker1.geometry}
          material={materials['Material.050']}
          position={[-2.78, 2.53, -2.28]}
          rotation={[Math.PI / 2, -0.17, 0]}
          scale={[0.14, 0.14, 0.14]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sticker3.geometry}
          material={materials['Material.051']}
          position={[-2.78, 3.07, -2.28]}
          rotation={[Math.PI / 2, -0.17, 0]}
          scale={[0.14, 0.14, 0.14]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sticker2.geometry}
          material={materials['Material.049']}
          position={[-2.49, 2.77, -2.28]}
          rotation={[Math.PI / 2, -Math.PI / 6, 0]}
          scale={[0.14, 0.14, 0.14]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.poster.geometry}
          material={materials['Material.053']}
          position={[-2.26, 3.21, -2.97]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.44, 0.55, 0.55]}
        />
      </group>
    )
  }

export default Closet;
