//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {BrowserRouter as Router,Switch,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    <Routes>      
      <Route path='/' element={<>
        <Banner></Banner>
        <Movies></Movies>
      </>} />
      <Route path='/favourites' element={<>
      <Favourite></Favourite>
      </>}/>
    </Routes>

    {/* <Banner />
    <Movies />
    <Favourite /> */}
    </Router>
    

    </>
   
  );
}

export default App;
