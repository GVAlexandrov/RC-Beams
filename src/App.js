// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './config/firebaseInit';
import { useEffect, useState } from 'react';


import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyBeams from './Components/Beams/Beams';
import NewBeam from './Components/NewBeam/NewBeam';
import EditBeam from './Components/EditBeam/EditBeam';
import Frames from './Components/Frames/Frames';
import Footer from './Components/Footer/Footer';


function App() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUserEmail);
  }, []);

  return (
    <WrapperDivStyled>
      <Header userEmail={userEmail} setUserEmail={setUserEmail} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/beams' element={<MyBeams />} />
        <Route path='/beams/new-beam' element={<NewBeam />} />
        <Route path='/beams/edit-beam/:beamId' element={<EditBeam />} />
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
    height:99vh;
`;

export default App;
