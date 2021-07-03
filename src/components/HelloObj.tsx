import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export const HelloObj = () => {
  const obj = useLoader(OBJLoader, './monkey.obj');
  return <primitive object={obj} scale={2} />
};
