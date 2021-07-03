import { useEffect, useRef, useState } from 'react';
import { Object3D } from 'three';
import { useFrame } from '@react-three/fiber';

export const HelloClickScale = () => {
  const [scale, setScale] = useState(1);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<Object3D>();
  const documentBody: HTMLElement = document.body;

  useEffect(() => {
    documentBody.style.cursor = hovered ? 'pointer' : 'default';
  }, [documentBody.style.cursor, hovered]);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh
      ref={ref}
      scale={[scale, scale, scale]}
      onClick={() => setScale(scale === 1 ? 1.5 : 1)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry args={[2, 2, 2]} attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
