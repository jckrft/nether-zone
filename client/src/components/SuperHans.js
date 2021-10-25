import Comments from './Comments.js'

import Carousel from 'react-bootstrap/Carousel'

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
        
        {/* <Carousel.Caption>
          <h1>crunchy nut</h1>
        </Carousel.Caption> */}

      </Carousel>
      <Comments />
    </div>
  )
}

export default SuperHans;