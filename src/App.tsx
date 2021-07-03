import './App.css';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { PCFSoftShadowMap } from 'three';
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from '@react-three/drei';

import { HelloCube } from './components/HelloCube';
import { HelloClickScale } from './components/HelloClickScale';
import { HelloTwoCube } from './components/HelloTwoCube';
import { HelloGLTF } from './components/HelloGLTF';
import { HelloObj } from './components/HelloObj';
import { HelloFBXOne, HelloFBXTwo } from './components/HelloFBX';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>
}

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
        {/* <HelloTwoCube></HelloTwoCube> */}
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          {/* <HelloGLTF></HelloGLTF> */}
          <HelloObj></HelloObj>
          {/* <HelloFBXOne></HelloFBXOne> */}
          {/* <HelloFBXTwo></HelloFBXTwo> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
