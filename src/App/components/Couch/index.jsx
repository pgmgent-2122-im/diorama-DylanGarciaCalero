import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import couchGlb from "./assets/couch.glb";

const Couch = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(couchGlb, true)
    return (
      <group ref={group} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sitting_cushion001.geometry}
          material={nodes.Sitting_cushion001.material}
          position={[2.61, 0.88, -0.55]}
          scale={[0.72, 0.72, 0.91]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Back_cushion.geometry}
          material={nodes.Back_cushion.material}
          position={[3.27, 1.24, 0.35]}
          rotation={[0, 0, 1.22]}
          scale={[0.26, 0.93, 1.84]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zetelpoten.geometry}
          material={materials['Material.028']}
          position={[2.07, 0.48, 2.41]}
          scale={[0.09, 0.09, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['zetel-base'].geometry}
          material={materials['Material.041']}
          position={[2.85, 0.48, 0.35]}
          scale={[2.2, 1, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.kussens.geometry}
          material={materials['Material.025']}
          position={[3.16, 1.53, -1.07]}
          rotation={[-0.14, 0.28, 0.48]}
          scale={[0.45, 0.45, 0.45]}
        />
      </group>
    )
  }

export default Couch;
