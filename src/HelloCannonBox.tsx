import React, { useEffect, useState } from 'react';
import CANNON from 'cannon';
import { useCannon, Provider } from './customHooks/useCannon';

interface PropsPosition {
  position: number[];
}

function Plane({ position } : PropsPosition) {
  const ref = useCannon({ mass: 0 }, (body: CANNON.Body) => {
    body.addShape(new CANNON.Plane());
    body.position.set(position[0], position[1], position[2]);
  });
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#272727" />
    </mesh>
  );
}

function Box({ position }: PropsPosition) {
  const ref = useCannon({ mass: 100000 }, (body: CANNON.Body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(position[0], position[1], position[2]);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

export default function HelloCannonBox() {
  const [showPlane, set] = useState(true);
  useEffect(() => void setTimeout(() => set(false), 5000), []);
  return (
    <Provider>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
      <Plane position={[0, 0, -10]} />
      {showPlane && <Plane position={[0, 0, 0]} />} 
      <Box position={[1, 0, 1]} />
      <Box position={[2, 1, 5]} />
      <Box position={[0, 0, 6]} />
      <Box position={[-1, 1, 8]} />
      <Box position={[-2, 2, 13]} />
      <Box position={[2, -1, 13]} />
      {!showPlane && <Box position={[0.5, 1.0, 20]} />}
    </Provider>
  );
}