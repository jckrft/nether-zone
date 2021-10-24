import { Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel'

const API_URL = 'https://api.airtable.com/v0/apphxbPJK0bBSbqII/Table%201?api_key=keyr5pmOBeTGWboAj'

function Jeremy() {
  const [data, setData] = useState([]);
    

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(API_URL)
      setData(resp.data.records)
    }

    getData();
  }, []);
  
  return (
    <div>
      
    </div>
  )
}

export default Jeremy;

