import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Jeremy from './components/Jeremy.js'
import SuperHans from './components/SuperHans.js'
import Mark from './components/Mark.js'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'


function App() {
  const [data, setData] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  const API_URL = 'https://api.airtable.com/v0/apphxbPJK0bBSbqII/Table%201?api_key=keyr5pmOBeTGWboAj'
    

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(API_URL)
      setData(resp.data.records)
    }

    getData();
  }, [toggleFetch]);
  
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <nav>
      <Link to='/mark'>
          Mark
        </Link>
        <Link to='/jeremy'>
          Jeremy
        </Link>
        <Link to='/superhans'>
          Super Hans
        </Link>
      </nav>
       
      {/* <Link to='/'>
        nether zone
      </Link> */}

      <Route exact path="/">
        <Home />
      </Route>
      

      <Route exact path="/jeremy">
        <Jeremy
          data={data}
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />
      </Route>
      <Route exact path="/superhans">
        <SuperHans
          data={data}
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />
      </Route>
      <Route exact path="/mark">
        <Mark
          data={data}
          setToggleFetch={setToggleFetch}
          toggleFetch={toggleFetch}
        />
      </Route> 


    </div>
  );
}

export default App;
