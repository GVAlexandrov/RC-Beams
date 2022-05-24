// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';


import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import MyBeams from './Components/Beams/Beams';
import NewBeam from './Components/NewBeam/NewBeam';
import Frames from './Components/Frames/Frames';

import Footer from './Components/Footer/Footer';


function App() {
  return (
    <WrapperDivStyled>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/beams' element={<MyBeams />} />
        <Route path='/beams/new-beam' element={<NewBeam />} />
        <Route path='/frames' element={<Frames />} />
      </Routes>


      <Footer />
    </WrapperDivStyled>
  );
}

const WrapperDivStyled = styled.div`
    background-color: gray;
    border: 2px solid black;
    margin: auto ;
    text-align: center;
    max-width:1100px;
`;

export default App;
