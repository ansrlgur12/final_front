
import MainPage from './main/mainPage';
import ShopMain from './page/Shop/shopMain';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

      
      <Route path='/' element={<MainPage />} />
      <Route path='/shopMain' element={<ShopMain />} />
     
      </Routes>
      </Router>
    </div>
  );
}

export default App;
