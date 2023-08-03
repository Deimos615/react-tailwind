import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import logo from "./assets/logo.png";
import Homepage from './pages/Homepage';
import Promotion from './pages/Promotion';
import Support from './pages/Support';
import Recruitment from './pages/Recruitment';
import Error404 from './pages/Error404';
import { Routes, Route } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'

function App() {
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)

    <div className="box-border">
      <div className="flex flex-col">

        <Navbar logo={logo} />
        <div className='min-50vw'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/support" element={<Support />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer logo={logo} />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
