import React from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber';
import HelloWorld from './HelloWorld';

const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas style={{ width: '500px', height: '500px' }}>
        <HelloWorld />
      </Canvas>
    </div>
  );
}

export default App;
