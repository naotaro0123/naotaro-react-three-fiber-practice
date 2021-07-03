import './App.css';
import { Canvas } from '@react-three/fiber'
import { PCFSoftShadowMap } from 'three';

import { HelloCube } from './components/HelloCube';
import { HelloClickScale } from './components/HelloClickScale';
import { HelloTwoCube } from './components/HelloTwoCube';

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
        <ambientLight intensity={0.5}></ambientLight>
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}></spotLight>
        <pointLight position={[-10, -10, -10]}></pointLight>
        {/* <HelloCube></HelloCube> */}
        {/* <HelloClickScale></HelloClickScale> */}
        <HelloTwoCube></HelloTwoCube>
      </Canvas>
    </div>
  );
}

export default App;
