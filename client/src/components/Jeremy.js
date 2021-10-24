import { Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel'

const API_URL = 'https://api.airtable.com/v0/apphxbPJK0bBSbqII/Table%201?api_key=keyr5pmOBeTGWboAj'

function Jeremy() {
  const [jeremyData, setJeremyData] = useState([]);
    

  useEffect(() => {
    const getJeremyData = async () => {
      const resp = await axios.get(API_URL)
      setJeremyData(resp.data.records)
    }

    getJeremyData();
  }, []);
  
  return (
    <div>
      {/* <Carousel.Item>
        <img
          src=
      </Carousel.Item> */}
      {jeremyData.map((jeremy) => (
        <div>
          <h1 key={jeremy.id}>{jeremy.fields.series}</h1>)
          <div>
          <img src={jeremy.fields.quotes.url} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Jeremy;

