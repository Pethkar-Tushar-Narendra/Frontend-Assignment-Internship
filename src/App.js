import './App.css';
import Homescreen from './Srceens/Homescreen/Homescreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import RentScreen from './Srceens/Rent/RentScreen';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RentScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
