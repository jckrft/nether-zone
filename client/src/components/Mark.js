import Comments from './Comments.js'

import Carousel from 'react-bootstrap/Carousel'

function Mark({ data, toggleFetch, setToggleFetch }) {
  
  const markData = data.filter(quote => quote.fields.character === 'mark')
  
  return (
    <div>
      <Carousel>
      
        <Carousel.Item>
          {markData.map((mark) => (
            <img
              className="superhans"
              src={mark.fields.quotes[0].url}
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

export default Mark;