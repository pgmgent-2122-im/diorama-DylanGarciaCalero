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
      <Text
        fontSize={0.7}
        font={FontFamily.Shippori}
        position={[-4.5, 8.3, 9.7]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="yellow"
      >
        Hover over the
      </Text>         
      <Text
        fontSize={0.7}
        font={FontFamily.Shippori}
        position={[-4.5, 7.6, 10.7]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="red"
      >
        Keyboard or Monitors
      </Text>      
      <Text
        fontSize={1.1}
        font={FontFamily.Shippori}
        position={[-4.5, 6.7, 8]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="white"
      >
        TO
      </Text>    
      <Text
        fontSize={0.7}
        font={FontFamily.Shippori}
        position={[-4.5, 6, 8.8]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="red"
      >
        see hover
      </Text>   
      <Text
        fontSize={1.3}
        font={FontFamily.Shippori}
        position={[-4.5, 5, 11]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="yellow"
      >
        ANIMATIONS
      </Text>   
      <Text
        fontSize={8}
        font={FontFamily.Shippori}
        position={[-4.5, 8.3, 6.5]}
        fillOpacity={0.1}
        rotation={[0, 1.58, 0]}
        color="white"
      >
        |
      </Text>   
      <Text
        fontSize={0.8}
        font={FontFamily.Shippori}
        position={[4, -1, -2.1]}
        fillOpacity={0.1}
        rotation={[0, 1.58, 0]}
        color="white"
      >
        Click on
      </Text>   
      <Text
        fontSize={0.8}
        font={FontFamily.Shippori}
        position={[4, -1.7, -0.8]}
        fillOpacity={0.1}
        rotation={[0, 1.58, 0]}
        color="white"
      >
        The left monitor
      </Text>   
      <Text
        fontSize={1.5}
        font={FontFamily.Shippori}
        position={[4, -1.4, -4.5]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 0]}
        color="white"
      >
        TO
      </Text>   
      <Text
        fontSize={0.8}
        font={FontFamily.Shippori}
        position={[4, 0.7, -4.75]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 1.58]}
        color="white"
      >
        pen my
      </Text>  
      <Text
        fontSize={1.1}
        font={FontFamily.Shippori}
        position={[4, 0.7, -6.05]}
        fillOpacity={0.3}
        rotation={[0, 1.58, 1.58]}
        color="yellow"
      >
        PROJECTS
      </Text>  
      <Text
        fontSize={0.7}
        font={FontFamily.Shippori}
        position={[-2.9, -0.5, 6]}
        fillOpacity={0.3}
        rotation={[-1.58, 0, 0]}
        color="white"
      >
        Click on the
      </Text>  
      <Text
        fontSize={1}
        font={FontFamily.Shippori}
        position={[-2.2, -0.5, 6.8]}
        fillOpacity={0.3}
        rotation={[-1.58, 0, 0]}
        color="yellow"
      >
        KEYBOARD
      </Text>  
      <Text
        fontSize={1}
        font={FontFamily.Shippori}
        position={[-0.95, -0.5, 7.7]}
        fillOpacity={0.3}
        rotation={[-1.58, 0, 0]}
        color="white"
      >
        to get
      </Text>  
      <Text
        fontSize={1}
        font={FontFamily.Shippori}
        position={[-1.8, -0.5, 8.7]}
        fillOpacity={0.3}
        rotation={[-1.58, 0, 0]}
        color="red"
      >
        in TOUCH
      </Text>  
    </>
  );
};

export default LoremIpsum;