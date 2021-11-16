import { Canvas } from "@react-three/fiber";

import Content from "./Content";

const App = () => {
  return (
    <div className="room">
      <Canvas camera={{ position: [10,50,10], fov: 120, zoom: 11}}>
        <Content linear={false} shadows={true} />
      </Canvas>
    </div>
  );
};

export default App;
