
import MainPage from './main/mainPage';
import ShopMain from './page/Shop/shopMain';
import MapMain from './page/Map/mapMain';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

     
      <Route path='/' element={<MainPage />} />
      <Route path='/shopMain' element={<ShopMain />} />
      <Route path='/mapMain' element={<MapMain />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
