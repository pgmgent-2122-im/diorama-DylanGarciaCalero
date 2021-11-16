import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import MonitorsGlb from "./assets/Monitors.glb";

const Monitors = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(MonitorsGlb, true)
    return (
      <group ref={group} dispose={null}>
        <group
          position={[-3.40, 2.4, -1.24]}
          rotation={[Math.PI / 2, 0, -1.22]}
          scale={[0.74, 0.43, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_1.geometry}
            material={materials['Material.004']}
          />
        </group>
        <group
          position={[-3.66, 2.4, 0.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.74, 0.43, 0.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_1.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_2.geometry}
            material={materials['Material.029']}
          />
        </group>
      </group>
    )
  }

export default Monitors;
