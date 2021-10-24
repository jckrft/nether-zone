import { Link, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Jeremy from './components/Jeremy.js'


function App() {
  const [data, setData] = useState([]);

  const API_URL = 'https://api.airtable.com/v0/apphxbPJK0bBSbqII/Table%201?api_key=keyr5pmOBeTGWboAj'
    

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(API_URL)
      setData(resp.data.records)
    }

    getData();
  }, []);
  
  return (
    <div className="App">
      <nav>
        <Link to='/jeremy'>
          Jeremy
        </Link>
        </nav>
      <Route path="/jeremy">
        <Jeremy
          data={data}
        />
      </Route>


    </div>
  );
}

export default App;
