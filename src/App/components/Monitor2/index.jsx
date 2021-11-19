import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Monitor2glb from './assets/Monitor2.glb'

const Monitor2 = () => {
  const { nodes, materials, animations } = useGLTF(Monitor2glb, true);
  const { actions, ref } = useAnimations(animations);
  const [ hover, setHover] = useState(false);

  useEffect(() => {
      if (hover) {
        actions.Monitor2Animation.play();
      } else if (!hover) {
          setTimeout(() => {
            actions.Monitor2Animation.stop();
          }, 1000);
      }
  })

  return (
    <group dispose={null}>
      <group ref={ref}
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[-3.43, 2.41, -1.24]}
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
    </group>
  )
}

export default Monitor2;

