import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
     
     <Navbar/>
     <Hero/>
    </div>
  );
}

export default App;
