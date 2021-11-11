import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import prullenbakGlb from "./assets/Prullenbak.glb";

const Prullenbak = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(prullenbakGlb, true)
    return (
      <group ref={group} dispose={null}>
        <group position={[-3.32, 0.28, 2.46]} scale={[0.24, 0.24, 0.24]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle005.geometry}
            material={materials['Material.038']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle005_1.geometry}
            material={materials['Material.039']}
          />
        </group>
      </group>
    )
  }

export default Prullenbak;
