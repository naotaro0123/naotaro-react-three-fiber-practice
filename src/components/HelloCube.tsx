import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Object3D } from 'three';

export const HelloCube = () => {
  const ref = useRef<Object3D>();
  useFrame(() => {
    if (ref.current) {
      const currentRotation = ref.current.rotation;
      currentRotation.x = currentRotation.y += 0.01;
    }
  });
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click', e)}
      onPointerOver={(e) => console.log('hover', e)}
      onPointerOut={(e) => console.log('no-hover', e)}
    >
      <boxBufferGeometry
        attach="geometry"
        args={[4, 4, 4]}
      >
      </boxBufferGeometry>
      <meshNormalMaterial attach="material">
      </meshNormalMaterial>
    </mesh>
  )
}
