import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './components/pages/HomePage';
import DocumentsPage from './components/pages/DocumentsPage';
import PricePage from './components/pages/PricePage';
import HeaderBoxPage from './components/pages/HeaderBoxPage';
import FooldPage from './components/pages/FooldPage';
import ContactServicePage from './components/pages/ContactServicePage';
import licenseProductPage from './components/pages/licenseProductPage';
// import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/documents' element={<DocumentsPage />} />
          <Route path='/price' element={<PricePage />} />
          <Route path='/headerbox' element={<HeaderBoxPage />} />
          <Route path='/enroll' element={<FooldPage />} />
          <Route path='/contact' element={<ContactServicePage />} />
          <Route path='/license' element={<licenseProductPage />} />
          {/* <Route path='/banner' element={<Banner/>} /> */}
        </Route>

        
      </Routes>
    </div>
    
  );
}

export default App;
