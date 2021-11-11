import { Suspense } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";

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

// Lighting
import LightingGui from "./components/Lighting/indexGui";

const components = [
  "Room"
];

const lightings = ["Default"];

const Content = () => {
  const { showStats } = useControls("General", {
    showStats: {
      label: "Stats",
      value: false,
    },
  });

  const {
    showAxesHelper,
    showGridHelper,
    useComponent,
    useLighting,
    useLightingGui,
  } = useControls("Helpers", {
    showAxesHelper: {
      label: "Axes Helper",
      value: false,
    },
    showGridHelper: {
      label: "Grid Helper",
      value: false,
    },
    useComponent: {
      label: "Component",
      options: components,
      value: "Room",
    },
    useLighting: {
      label: "Lighting",
      options: lightings,
      value: "Default",
    },
    useLightingGui: {
      label: "Lighting GUI",
      value: true,
    },
  });

  function showComponent(name) {
    return useComponent === name;
  }

  function showLighting(name) {
    return useLighting === name;
  }

  return (
    <>
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true}/>
      {showAxesHelper && <axesHelper />}
      {showGridHelper && <gridHelper />}
      {showStats && <Stats />}

      {useLightingGui && <LightingGui />}
      
      <Suspense fallback={null}>
        {showComponent("Room") && <Room />}
        {showComponent("Room") && <Couch />}
        {showComponent("Room") && <Table />}
        {showComponent("Room") && <Closet />}
        {showComponent("Room") && <Desk />}
        {showComponent("Room") && <Monitors />}
        {showComponent("Room") && <WandPlank />}
        {showComponent("Room") && <Prullenbak/>}
        {showComponent("Room") && <Painting/>}
        
      </Suspense>
    </>
  );
};

export default Content;
