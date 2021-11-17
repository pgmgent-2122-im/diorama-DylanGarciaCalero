import { DoubleSide } from "three";
import { Text, useMatcapTexture } from "@react-three/drei";

import FontFamily from "../../lib/FontFamily";

const LoremIpsum = () => {
  return (
    <>
      <Text
        fontSize={1.2}
        font={FontFamily.Shippori}
        position={[-0.8, 0.9, 4]}
        fillOpacity={0.3}
      >
        WELCOME
      </Text>  
      <Text
        fontSize={1}
        font={FontFamily.Shippori}
        position={[1.5, 1.8, 4]}
        fillOpacity={0.7}
        color="yellow"
      >
        TO
      </Text>  
      <Text
        fontSize={2.3}
        font={FontFamily.Shippori}
        position={[3, 1.25, 4]}
        fillOpacity={0.3}
      >
        M
      </Text>
      <Text
        fontSize={2.3}
        font={FontFamily.Shippori}
        position={[4, 1.25, 3.3]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
      >
        Y
      </Text>
      <Text
        fontSize={1.2}
        font={FontFamily.Shippori}
        position={[4, 0.9, -0.5]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="yellow"
      >
        PORTFOLIO
      </Text>          
    </>
  );
};

export default LoremIpsum;