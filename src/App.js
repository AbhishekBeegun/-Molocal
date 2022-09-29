import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';
import Portlouis from './pages/portlouis';
import Savanne from './pages/savanne';
import Plainewil from './pages/plainewilhem';
import Moka from './pages/moka';
import Blackriver from './pages/blackriver';
import Pamplemousse from './pages/pamplemousse';
import Flacq from './pages/flacq';
import Grandport from './pages/grandport';
import Rivduremp from './pages/rivduremp';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="pl" element ={<Portlouis/>}/>
        <Route path ="svn" element = {<Savanne/>}/>
        <Route path ="pw" element ={<Plainewil/>}/>
        <Route path ="moka" element ={<Moka/>}/>
        <Route path ="br" element ={<Blackriver/>}/>
        <Route path ="pample" element ={<Pamplemousse/>}/>
        <Route path ="flq" element ={<Flacq/>}/>
        <Route path ="gp" element ={<Grandport/>}/>
        <Route path ="rdr" element ={<Rivduremp/>}/>



       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
