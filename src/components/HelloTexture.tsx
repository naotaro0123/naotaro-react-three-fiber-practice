import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const HelloTexture = () => {
  const [colorMap] = useLoader(TextureLoader, ['logo512.png']);
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  )
}
