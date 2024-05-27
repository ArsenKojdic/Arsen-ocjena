import { Routes, Route,BrowserRouter as Router } from 'react-router-dom';
import Kupovina from './Components.js/Kupovina.js';
import Yeezy from './Components.js/Yeezy.js';
import AirMax from './Components.js/AirMax.js';
import './App.css';
import Naslovna from './Components.js/Naslovna.js';
import Jordan4 from './Components.js/Jordan4.js';
import Dunk from './Components.js/Dunk.js';

function App() {
  return (
    <div class="App">

      <Router>
        <Routes>
          <Route path='/' element={<Naslovna></Naslovna>}></Route>
          <Route path='/Yeezy' element={<Yeezy></Yeezy>}></Route>
          <Route path='/AirMax' element={<AirMax></AirMax>}></Route>
          <Route path='/Jordan4' element={<Jordan4></Jordan4>}></Route>
          <Route path='/Dunk' element={<Dunk></Dunk>}></Route>
          <Route path='/Kupovina' element={<Kupovina></Kupovina>}></Route>
        </Routes>
      </Router>
      
  
    </div>
  );
}

export default App;

