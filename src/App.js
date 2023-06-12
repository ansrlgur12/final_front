import * as React from 'react';
import Navbar from './components/navbar';
import Map from './components/map';
import Header from './main/header';
import MainPage from './main/mainPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage />
{/*       
      <Navbar/>
      <Map />
       */}

    </div>
  );
}

export default App;
