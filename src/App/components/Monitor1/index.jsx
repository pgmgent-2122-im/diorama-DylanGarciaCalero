
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Monitor1glb from './assets/Monitor1.glb'

const Monitor1 = () => {
  const { nodes, materials, animations } = useGLTF(Monitor1glb)
  const { actions, ref } = useAnimations(animations)

  const [ hover, setHover] = useState(false);
  const [ showProjects, setShowProjects] = useState(false);

  useEffect(() => {
      if (hover) {
        actions.Monitor1Animation.play();
      } else if (!hover) {
          setTimeout(() => {
            actions.Monitor1Animation.stop();
          }, 1000);
      }

      let projects = document.getElementById('projects');
      if (showProjects) {
          projects.style.display = "block"
      } else if (!showProjects) {
        projects.style.display = "none"
      }

      let close = document.getElementById('close_button');
      close.addEventListener('click', function() {
        setShowProjects(false);
      })
  })

  return (
    <group  dispose={null}>
      <group ref={ref}
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setShowProjects(true)}
        name="Monitor"
        position={[-3.69, 2.41, 0.3]}
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

export default Monitor1