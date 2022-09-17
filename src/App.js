// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { auth } from './config/firebaseInit';
import { useEffect, useState } from 'react';

import { WrapperDivStyled, MainStyled } from './styledApp';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
// import Register from './Components/Register/Register';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Beams from './Components/Beams/Beams';
import NewBeam from './Components/NewBeam/NewBeam';
import NewBeam2 from './Components/NewBeam2/NewBeam2';
import EditBeam from './Components/EditBeam/EditBeam';
import InfoBeam from './Components/InfoBeam/InfoBeam';
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
        <h1>This webpage is still under construction</h1>
        <h3>Some of the features might not work</h3>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginRegister />} />
          <Route path='/register' element={<LoginRegister />} />

          <Route path='/beams' element={<Beams />} />
          <Route path='/beams/new-beam' element={<NewBeam />} />
          <Route path='/beams/new-beam2' element={<NewBeam2 />} />
          <Route path='/beams/info-beam/:beamId' element={<InfoBeam />} />
          <Route path='/beams/edit-beam/:beamId' element={<EditBeam />} />
        </Routes>
      </MainStyled>


      <Footer />
    </WrapperDivStyled>
  );
}

export default App;
