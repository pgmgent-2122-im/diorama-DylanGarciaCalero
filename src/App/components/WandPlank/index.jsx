import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import WandplankGlb from "./assets/WandPlank.glb";

const WandPlank = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(WandplankGlb, true)
    return (
    <group ref={group}dispose={null}>
      <group position={[-3.62, 3.48, 0.21]} scale={[0.15, 0.03, 1.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Material.014']}
        />
      </group>
      <group
        position={[-3.6, 3.55, 0.9]}
        rotation={[-Math.PI, -Math.PI / 9, -Math.PI]}
        scale={[0.06, 0.06, 0.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_3.geometry}
          material={materials['Material.020']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kubus.geometry}
        material={materials['Material.064']}
        position={[-3.56, 3.57, -0.4]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[-0.07, -0.07, -0.07]}
      />
      <group position={[-3.6, 3.5, 1.36]} scale={[0.08, 0.08, 0.08]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={materials['Material.060']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_1.geometry}
          material={materials['Material.061']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_2.geometry}
          material={materials['Material.062']}
        />
      </group>
    </group>
  )
  }

export default WandPlank;
