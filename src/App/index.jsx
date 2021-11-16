import { Canvas } from "@react-three/fiber";
import Content from "./Content";
import React from "react";

class App extends React.Component {

   // fake authentication Promise
   authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  
  render() {
    return (
      <div className="room">
        <Canvas camera={{ position: [30,70,30], fov: 120, zoom: 18}}>
          <Content linear={false} shadows={true} />
        </Canvas>
      </div>
    );
  }
};

export default App;
