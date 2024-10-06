import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer';
import Travel from './Pages/Travel/Travel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tech from './Pages/Tech/Tech';


const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000); // 5-second interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/"
          element={
            <>
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Navbar />
              <Hero
                heroData={heroData}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
                setPlayStatus={setPlayStatus}
              />
              <Category />
              <Footer />
            </>
          }
        />
        
        {/* Travel Route */}
        <Route path="/travel" element={<Travel />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
