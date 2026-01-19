import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import Cart from './components/Cart';
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import SPFooter from './components/SPFooter';
import Under20 from './components/Under20';
import Under10 from './components/Under10';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';
import MobileNav from './components/MobileNav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes >
          <Route path='/' exact element={<>   <NavBar /> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}  {/*<OurBestSellers />*/}  <Ingridients />  <JournalSection /> <FollowONIG /> <SPFooter />  </>} />
          <Route path='/:id' exact element={<> <NavBar /> <MobileNav />  <SinglePage /> </>} />
          <Route path='/journal/april' element={<> <NavBar /> <MobileNav />  <JournalPage /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /> <CartHold /></>} />
          <Route path='/under20' element={<> <NavBar />  <Under20 /> </>} />
          <Route path='/under40' element={<> <NavBar />  <Under10 /> </>} />
          <Route path='/forher' element={<> <NavBar />  <ForHer /> </>} />
          <Route path='/forhim' element={<> <NavBar />  <ForHim /> </>} />

          {/* CATCH-ALL ROUTE (404 Page) -------- This must always be the last route inside <Routes> */}
          <Route path="*" element={
            <> 
              <NavBar /> 
              <MobileNav /> 
              <div className="text-center mt-20">
                <h1 className="text-4xl font-bold fof">404 - Page Not Found</h1>
                <p className="mt-4 fof">The page you are looking for does not exist.</p>
              </div> 
            </>
          } />


        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
