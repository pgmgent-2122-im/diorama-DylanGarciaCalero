import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import deskGlb from "./assets/Desk.glb";

const Desk = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(deskGlb, true)
    return (
      <group ref={group} dispose={null}>
        <mesh
        // TREE ROOT
          castShadow
          receiveShadow
          geometry={nodes.tree.geometry}
          material={materials['Material.031']}
          position={[-3.29, 1.79, 1.63]}
          scale={[0.44, 0.44, 0.44]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.leaves.geometry}
            material={materials['Material.030']}
          />
        </mesh>
        <group position={[-3.03, 1.35, 0.04]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials['Material.035']}
            scale={[0.64,1,1.8]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials['Material.056']}
            scale={[0.64,1,1.8]}
          />
        </group>
        <group position={[-3.04, 0.28, 1.49]} scale={[0.64, 0.85, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['Material.036']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials['Material.037']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials['Material.055']}
          />
        </group>
        <group position={[-2.95, 1.65, -1.27]} scale={[-0.11, -0.06, -0.06]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials['Material.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_1.geometry}
            material={materials['Material.016']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mousewire.geometry}
          material={nodes.mousewire.material}
          position={[-3.15, 1.67, -1.27]}
          scale={[0.1, 0.1, 0.1]}
        />
        <group position={[-3.29, 1.65, 1.62]} scale={[0.13, 0.13, 0.13]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials['Material.032']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials['Material.033']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boek1.geometry}
          material={materials['Material.009']}
          position={[-3.14, 1.67, 1.1]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.13, 0.01, 0.2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boek3.geometry}
          material={nodes.boek3.material}
          position={[-3.24, 1.72, 1.18]}
          rotation={[0, 1.22, 0]}
          scale={[0.13, 0.01, 0.2]}
        />
        <group position={[-3.24, 1.69, 1.1]} rotation={[0, Math.PI / 9, 0]} scale={[0.13, 0.01, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['Material.010']}
          />
        </group>
      </group>
    )
  }

export default Desk;
