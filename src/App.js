// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './config/firebaseInit';
import { useEffect, useState } from 'react';


import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Beams from './Components/Beams/Beams';
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

      <MainStyled>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/beams' element={<Beams />} />
          <Route path='/beams/new-beam' element={<NewBeam />} />
          <Route path='/beams/edit-beam/:beamId' element={<EditBeam />} />

          <Route path='/frames' element={<Frames />} />
        </Routes>
      </MainStyled>


      <Footer />
    </WrapperDivStyled>
  );
}

const WrapperDivStyled = styled.div`
position:absolute;
top:0px;
left:0px;
width:100%;
/* min-height:90vh; */
padding-top:80px;
background-color: gray;
text-align: center;
display:flex;
    flex-direction: column;    
  
`;

const MainStyled = styled.main`
position:relative;
top:20px;
width:100%;
min-height:65vh;
`;

export default App;
