
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Keyboardglb from './assets/Keyboard.glb'

const Keyboard = () => {
  const { nodes, materials, animations } = useGLTF(Keyboardglb, true)
  const { actions, ref } = useAnimations(animations)
  const [ hover, setHover] = useState(false);

  useEffect(() => {
      if (hover) {
        actions.KeyboardAnimation.play();
      } else if (!hover) {
          setTimeout(() => {
            actions.KeyboardAnimation.stop();
          }, 1000);
      }
  })
  
  return (
    <group  dispose={null}>
      <group ref={ref}
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[-2.97, 1.68, 0.2]}
        rotation={[-0.01, 0.26, -0.09]}
        scale={[0.15, 0.15, 0.38]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials['Material.065']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_1.geometry}
          material={materials['Material.066']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_2.geometry}
          material={materials['Material.067']}
        />
      </group>
    </group>
  )
}

export default Keyboard;

