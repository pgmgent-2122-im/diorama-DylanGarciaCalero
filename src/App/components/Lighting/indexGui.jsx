import { useRef } from "react";
import {
  DirectionalLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const LightingGui = () => {
  const {
    directionalLightColor,
    directionalLightIntensity,
    directionalLightPosition,
  } = useControls("Lighting - Directional Light", {
    directionalLightColor: { label: "Color", value: "#ffffff" },
    directionalLightIntensity: {
      label: "Intensity",
      max: 20,
      min: 0,
      value: 0.5,
    },
    directionalLightPosition: { label: "Position XZ", value: { x: 4, z: 1 } },
  });
  const { pointLightColor, pointLightIntensity, pointLightPosition } =
    useControls("Lighting - Point Light", {
      pointLightColor: { label: "Color", value: "#4e525c" },
      pointLightIntensity: { label: "Intensity", max: 20, min: 0, value: 1.3 },
      pointLightPosition: { label: "Position XZY", value: { x: 1.4, y: 1.8, z: 0.3 } },
    });
  const {
    spotLightColor,
    spotLightIntensity,
    spotLightPenumbra,
    spotLightPosition,
    spotLightTarget,
  } = useControls("Lighting - Spotlight", {
    spotLightColor: { label: "Color", value: "#ffcc77" },
    spotLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.5 },
    spotLightPenumbra: { label: "Penumbra", value: 0.5 },
    spotLightPosition: { label: "Position XYZ", value: { x: -4, y: 3.7, z: -1.3 } },
    spotLightTarget: { label: "Target XYZ", value: { x: 0, y:0 , z: 0} },
  });

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();
  const helperSize = 0.5;

  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLightColor,
  );
  // useHelper(pointLightRef, PointLightHelper, helperSize, pointLightColor);
  // useHelper(spotLightRef, SpotLightHelper, spotLightColor);

  useFrame(() => {
    target.translateX(spotLightTarget.x);
    target.translateZ(spotLightTarget.z);
    target.translateY(spotLightTarget.y);
  });

  return (
    <>
      <ambientLight color={0xffffff} intensity={0.05} />
      <pointLight
        castShadow={true}
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[1.4, 1.8 , 0.3]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={spotLightPenumbra}
        position={[spotLightPosition.x, spotLightPosition.y, spotLightPosition.z]}
        ref={spotLightRef}
        target={target}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity-0.05}
        penumbra={spotLightPenumbra}
        position={[spotLightPosition.x-0.2, spotLightPosition.y, spotLightPosition.z+2]}
        ref={spotLightRef}
        target={target}
      />
    </>
  );
};

export default LightingGui;
