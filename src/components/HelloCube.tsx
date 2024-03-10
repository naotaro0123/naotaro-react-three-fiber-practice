import { useRef } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const HelloCube = (props: MeshProps) => {
  const ref = useRef<Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      const currentRotation = ref.current.rotation;
      currentRotation.x = currentRotation.y += 0.01;
    }
  });
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(e) => console.log('click', e)}
      onPointerOver={(e) => console.log('hover', e)}
      onPointerOut={(e) => console.log('no-hover', e)}
    >
      <boxGeometry attach="geometry" args={[4, 4, 4]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};
