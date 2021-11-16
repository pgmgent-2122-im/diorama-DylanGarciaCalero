import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import ClockGlb from "./assets/ClockContainer.glb";

const Container = () => {
  const group = useRef()
  const { nodes, materials } = useGLTF(ClockGlb, true)
  return (
    <group ref={group} dispose={null}>
      <group position={[2.38, 3.75, -3.72]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials['Material.001']}
          scale={[1,1,0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials['Material.026']}
          scale={[1,1,0.3]}
        />
      </group>
    </group>
  )
}

export default Container;