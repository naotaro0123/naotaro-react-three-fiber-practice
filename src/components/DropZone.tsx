import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, useSphere } from '@react-three/cannon';
import type { MeshInfo, XYZ } from '../types/cube';
import { useState } from 'react';

const Sphere = ({ sphere }: { sphere: MeshInfo }) => {
  const [isHover, setHover] = useState(false);
  const args: XYZ = [2, 20, 20];
  const [ref, api] =
  useSphere(() => ({
    mass: 1,
    args: args[0],
    position: sphere.position,
  }));
const color = `rgb(${sphere.color})`;
  return (
    <mesh
      ref={ref}
      scale={ isHover ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={() => api.velocity.set(0, 8, 0)}
      onPointerOver={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={args}
      />
      <meshLambertMaterial
        attach="material"
        color={color} />
    </mesh>
  )
}

const Box = ({ cube }: { cube: MeshInfo }) => {
  const [isHover, setHover] = useState(false);
  const args: XYZ = [4, 4, 4];
  const [ref, api] =
    useBox(() => ({
      mass: 1,
      args,
      position: cube.position,
    }));
  const color = `rgb(${cube.color})`;
  return (
    <mesh
      ref={ref}
      scale={ isHover ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={() => api.velocity.set(0, 8, 0)}
      onPointerOver={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <boxBufferGeometry
        attach="geometry"
        args={args}
      />
      <meshLambertMaterial
        attach="material"
        color={color} />
    </mesh>
  )
}

const Plane = () => {
  const [ref] =
    useBox(() => ({
      type: 'Static',
      mass: 0,
      args: [50, 50, 1],
      rotation:[-Math.PI / 2, 0, 0],
    }));
  return (
    <mesh
      ref={ref}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[50, 50]}
      />
      <meshLambertMaterial
        attach="material"
        color="lightblue" />
    </mesh>
  )
}

export const DropZone = ({ cubes }: {cubes: MeshInfo[]}) => {
  return (
    <>
      <OrbitControls />
      <Stars />
      <Physics
        gravity={[0, -26, 0]}
      >
        {cubes.map((info, index) =>
          index % 2 ?
            <Sphere sphere={info} /> :
          <Box cube={info} />
        )}
        <Plane />
      </Physics>
    </>
  )
}
