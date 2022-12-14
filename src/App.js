import './App.css';
import Homescreen from './Srceens/Homescreen/Homescreen';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import RentScreen from './Srceens/Rent/RentScreen';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/rent" element={<RentScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
