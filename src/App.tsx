import React from 'react';
// import './App.css';
import './style.css';
import { Canvas } from 'react-three-fiber';
import { PCFSoftShadowMap } from 'three';
import HelloWorld1 from './HelloWorld';
import HelloWorld2 from './HelloWorld2';
import HellowCannonBox from './HelloCannonBox';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Canvas style={{ width: '500px', height: '500px' , background: '#000000'}}>
        <HelloWorld1 />
        <HelloWorld2 />
      </Canvas> */}
      <Canvas
          camera={{ position: [0, 0, 15] }}
          onCreated={( props ) => {
            props.gl.shadowMap.enabled = true;
            props.gl.shadowMap.type = PCFSoftShadowMap;
          }}
        >
        <HellowCannonBox />
      </Canvas>
    </div>
  );
}

export default App;
