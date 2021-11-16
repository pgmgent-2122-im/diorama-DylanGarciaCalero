import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ClockDigital = (props) => {
  const clockRef = useRef();

  useEffect(() => {
    if (clockRef.current) {
      clockRef.current.rotation.y = MathUtils.degToRad(0);
    }
  }, []);

  useFrame(() => {
    if (clockRef.current) {
      clockRef.current.text = new Date().toLocaleTimeString();
    }
  });

  return <Text fontSize={0.4} color="yellow" fillOpacity={0.5} position={[2.5, 4.25, -3.72]} ref={clockRef} {...props} />;
};

export default ClockDigital;