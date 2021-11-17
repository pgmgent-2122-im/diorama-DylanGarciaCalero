import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

// Components
import Room from "./components/CubeRoom";
import Couch from "./components/Couch";
import Table from "./components/Table";
import Closet from "./components/Closet";
import Desk from "./components/Desk";
import Monitors from "./components/Monitors";
import WandPlank from "./components/WandPlank";
import Prullenbak from "./components/Prullenbak";
import Painting from "./components/Painting";
import LoremIpsum from "./components/Text";
import ClockDigital from "./components/Clock/Digital";
import Container from "./components/Clock";

// Lighting
import LightingGui from "./components/Lighting/indexGui";


const Content = () => {
  return (
    <>
      <OrbitControls enablePan={false} enableRotate={true} minPolarAngle={1} maxPolarAngle={1} minAzimuthAngle={0.4} maxAzimuthAngle={1.2} enableZoom={false}/>
      <LightingGui />
      <Suspense fallback={null}>
        <LoremIpsum/>
        <Room />
        <Couch />
        <Table />
        <Closet />
        <Desk />
        <Monitors />
        <WandPlank />
        <Prullenbak/>
        <Painting/>
        <ClockDigital/>
        <Container/>
      </Suspense>
    </>
  );
};

export default Content;
