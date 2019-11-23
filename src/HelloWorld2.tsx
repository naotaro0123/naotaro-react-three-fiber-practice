import React, { useRef, useState, useEffect } from 'react';
import { Object3D } from 'three';
import { useRender } from 'react-three-fiber';

const HelloWorld2 = () => {
  const [scale, setScale] = useState(1);
  const [hovered, setHovered] = useState(false);
  const boxRef = useRef<Object3D>();
  const documentBody: HTMLElement = document.body;

  useEffect(() => {
    documentBody.style.cursor = hovered ? 'pointer' : 'default';
  }, [documentBody.style.cursor, hovered]);
  useRender(() => {
    if(boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
    }
  }, false);

  return (
    <mesh
      ref={boxRef}
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

export default HelloWorld2;