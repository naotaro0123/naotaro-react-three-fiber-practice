import './App.css';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PCFSoftShadowMap } from 'three';
import { Environment, OrbitControls, Html, useProgress } from '@react-three/drei';

import { HelloCube } from './components/HelloCube';
import { HelloTwoCube } from './components/HelloTwoCube';
import { HelloGLTF } from './components/HelloGLTF';
import { HelloObj } from './components/HelloObj';
import { HelloFBXOne, HelloFBXTwo } from './components/HelloFBX';
import { HelloTexture } from './components/HelloTexture';
import { HelloSpring } from './components/HelloSpring';
import type { MeshInfo, RGB, XYZ } from './types/cube';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const [cubes, setCubes] = useState<MeshInfo[]>([
    { position: [5, 15, 5], color: [0, 200, 0] },
    { position: [0, 15, 0], color: [200, 0, 0] },
    { position: [-5, 15, -5], color: [0, 0, 200] },
  ]);
  return (
    <div
      className="App"
      onClick={() => {
        const position: XYZ = [Math.floor(Math.random() * 10), 15, Math.floor(Math.random() * 10)];
        const color: RGB = [
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
        ];
        setCubes([...cubes, { position, color }]);
      }}
    >
      <Canvas
        onClick={() => console.log('canvas click')}
        camera={{ position: [0, 20, 15] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = PCFSoftShadowMap;
        }}
      >
        <Html>
          <div className="gui-content">cube number: {cubes.length}</div>
        </Html>
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Sample1 */}
        <HelloCube />

        {/* Sample2 */}
        {/* <HelloTwoCube /> */}

        {/* Sample3 */}
        {/* <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          <HelloGLTF />
        </Suspense> */}

        {/* Sample4 */}
        {/* <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          <HelloObj />
        </Suspense> */}

        {/* Sample5 */}
        {/* <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          <HelloFBXOne />
        </Suspense> */}

        {/* Sample6 */}
        {/* <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          <HelloFBXTwo />
        </Suspense> */}

        {/* Sample7 */}
        {/* <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment preset="sunset" background />
          <HelloTexture />
        </Suspense> */}

        {/* Sample8 */}
        {/* <HelloSpring /> */}
      </Canvas>
    </div>
  );
}

export default App;
