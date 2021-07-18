import './SubApp.css';
import { Canvas } from '@react-three/fiber';
import { HelloCube } from './components/HelloCube';

export default function SubApp() {
  return (
    <div className="App">
    <Canvas>
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <HelloCube />
    </Canvas>
    </div>
  )
}
