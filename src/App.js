// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { auth } from './config/firebaseInit';
import { useEffect, useState } from 'react';

import { WrapperDivStyled, MainStyled } from './styledApp';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Beams from './Components/Beams/Beams';
import NewBeam2 from './Components/NewBeam2/NewBeam2';
import EditBeam2 from './Components/EditBeam2/EditBeam2';
import Footer from './Components/Footer/Footer';
import Walls from './Components/Walls/Walls';
import NewWall from './Components/NewWall/NewWall';
import EditWall from './Components/EditWall/EditWall';


function App() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUserEmail);
  }, []);

  return (
    <WrapperDivStyled>

      <Header userEmail={userEmail} setUserEmail={setUserEmail} />

      <MainStyled>
        <h3 style={{ 'color': 'darkred', 'font-style': 'italic' }}>This webpage is still under construction. Some of the features might not work properly.</h3>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LoginRegister />} />
          <Route path='/register' element={<LoginRegister />} />

          <Route path='/beams' element={<Beams />} />
          <Route path='/new-beam' element={<NewBeam2 />} />
          <Route path='/beams/edit-beam/:beamId' element={<EditBeam2 />} />

          <Route path='/walls' element={<Walls />} />
          <Route path='/new-wall' element={<NewWall />} />
          <Route path='/walls/edit-wall/:wallID' element={<EditWall />} />
        </Routes>
      </MainStyled>

      <Footer />

    </WrapperDivStyled>
  );
}

export default App;
