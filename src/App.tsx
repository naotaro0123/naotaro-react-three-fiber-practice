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
import { HelloTexture } from './components/HelloTexture';
import { HelloSpring } from './components/HelloSpring';

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
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <HelloCube /> */}
        {/* <HelloClickScale /> */}
        {/* <HelloTwoCube /> */}
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          {/* <HelloGLTF /> */}
          {/* <HelloObj /> */}
          {/* <HelloFBXOne /> */}
          {/* <HelloFBXTwo /> */}
          {/* <HelloTexture /> */}
          <HelloSpring />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
