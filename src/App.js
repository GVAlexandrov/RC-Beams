// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import MyBeams from './Components/Beams/Beams';
import NewBeam from './Components/NewBeam/NewBeam';
import Slabs from './Components/Slabs/Slabs';
import Frames from './Components/Frames/Frames';

import Footer from './Components/Footer/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/beams' element={<MyBeams />} />
        <Route path='/beams/new-beam' element={<NewBeam />} />
        <Route path='/slabs' element={<Slabs />} />
        <Route path='/frames' element={<Frames />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
