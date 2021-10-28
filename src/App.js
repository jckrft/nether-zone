import { Route } from 'react-router-dom'

import Jeremy from './components/Jeremy.js'
import SuperHans from './components/SuperHans.js'
import Mark from './components/Mark.js'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import './App.css'


function App() {
  
  return (
    <div className="App">

      <Navbar />
      <br />

      <Route exact path="/">
        <Home />
      </Route>
      


      <Route exact path="/jeremy">
        <Jeremy/>
      </Route>

      <Route exact path="/superhans">
        <SuperHans/>
      </Route>

      <Route exact path="/mark">
        <Mark/>
      </Route>


    </div>
  );
}

export default App;
