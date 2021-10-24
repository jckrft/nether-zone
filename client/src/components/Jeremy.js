import { Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from 'react-bootstrap/Carousel'



function Jeremy({ data }) {
  
  const jeremyData = data.filter(quote => quote.fields.character === 'jeremy')

  
  return (
    <div>
      {/* 
      <Carousel>
      
      <Carousel.Item>
        <img
          className=
          src=
          alt=
      </Carousel.Item> 
      
      <Carousel.Caption
      </Carousel.Caption>
      
      </Carousel*/}
      
      {jeremyData.map((jeremy) => (
        <div>
          <h1 key={jeremy.id}>{jeremy.fields.series}</h1>
          <h1 key={jeremy.id}>{jeremy.fields.title}</h1>
          <div>
          <img src={jeremy.fields.quotes[0].url} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Jeremy;

