import React, {useState} from 'react';
//import BootstrapComp from './Component/Class/BootstrapComp';
//import Kursus from './Component/Class/state';
//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
import './App.css';

function App () {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik bertambah
      </button>
      <button onClick={() => setCount(count - 1)}>
        Klik berkurang
      </button>
    </div>
  );
}

export default App;
