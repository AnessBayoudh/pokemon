import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [linkQR, setLinkQR] = useState(null);
  const generate = () =>{
    console.log("gbyhufgy");
    
  }
  return (
    <div className="App">
      <div className='QR'>
        <canvas id='myCanvas'>
        </canvas>
      </div>
      
      <button onClick={generate} >generate QR</button>
    </div>

  );
}

export default App;
