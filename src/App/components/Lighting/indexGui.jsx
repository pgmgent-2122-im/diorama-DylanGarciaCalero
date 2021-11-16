import { useRef } from "react";
import {
  MathUtils,
} from "three";

const LightingGui = () => {

  const pointLightRef = useRef();
  const spotLightRef = useRef();

  return (
    <>
      <ambientLight color={0xffffff} intensity={0.05} />
      <pointLight
        castShadow={true}
        color="#4e525c"
        intensity="1.3"
        position={[1.4, 1.8 , 0.3]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color="#567bd5"
        intensity="0.6"
        penumbra="0.5"
        position={[-3.8, 4.9, -1.3]}
        ref={spotLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color="#567bd5"
        intensity="0.6"
        penumbra="0.5"
        position={[-3.8, 4.9, 1.3]}
        ref={spotLightRef}
      />
    </>
  );
};

export default LightingGui;
