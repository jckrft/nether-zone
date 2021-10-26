import Comments from './Comments.js'

import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css"

function SuperHans({ data, toggleFetch, setToggleFetch }) {
  
  const superHansData = data.filter(quote => quote.fields.character === 'super hans')
  

  return (
    <div>
      <Carousel>
      
        <Carousel.Item>
          {superHansData.map((superhans) => (
          <img
            className="superhans"
            src={superhans.fields.quotes[0].url}
            alt="crunchy nut"
            />
            ))}
        </Carousel.Item>
        
        {/* {superHansData.map((superhans) => (
          <Carousel.Caption>
            <h1>{superhans.fields.series}</h1>
            <h1>{superhans.fields.title}</h1>
          </Carousel.Caption>
        ))} */}
      </Carousel>
      <Comments />
    </div>
  )
}

export default SuperHans;