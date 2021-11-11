import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import tableGlb from "./assets/Table.glb";

const Table = () => {
    const group = useRef()
  const { nodes, materials } = useGLTF(tableGlb, true)
  return (
    <group ref={group} dispose={null}>
      <group position={[0.53, 0.91, 1.49]} scale={[0.61, 0.81, 1.44]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['Material.042']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials['Material.043']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glas.geometry}
        material={materials['Material.057']}
        position={[0.82, 0.97, 2.32]}
        scale={[0.04, 0.05, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glas_2.geometry}
        material={materials['Material.063']}
        position={[0.52, 0.97, 2.1]}
        scale={[0.04, 0.06, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.boektafel.geometry}
        material={materials['Material.011']}
        position={[0.77, 0.97, 2.73]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.15, 0.02, 0.22]}
      />
    </group>
  )
  }

export default Table;
