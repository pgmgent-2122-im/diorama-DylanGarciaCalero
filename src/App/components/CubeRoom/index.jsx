import { useGLTF } from "@react-three/drei";
import React, { useRef } from 'react'

import roomGlb from "./assets/room.glb";

const Room = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(roomGlb, true)
    return (
      <group ref={group} dispose={null}>
        <group scale={[4, 4, 4]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials['Material.023']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials['Material.024']}
          />
        </group>
      </group>
    )
  }

export default Room;
