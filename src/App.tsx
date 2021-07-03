import './App.css';
import { Canvas } from '@react-three/fiber'
import { PCFSoftShadowMap } from 'three';

import { HelloCube } from './components/HelloCube';

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{ position: [0, 0, 15] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = PCFSoftShadowMap;
        }}
      >
        <HelloCube></HelloCube>
      </Canvas>
    </div>
  );
}

export default App;
