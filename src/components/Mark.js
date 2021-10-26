import Comments from './Comments.js'

import Carousel from 'react-bootstrap/Carousel'

import './Mark.css'

function Mark({ data, toggleFetch, setToggleFetch }) {
  
  // const markData = data.filter(quote => quote.fields.character === 'mark')
  
  return (
    <div>
      <Carousel>
      
        <Carousel.Item>
            <img
              className="proper"
              src="https://64.media.tumblr.com/b51a287d2c65d8f160fd09d8f4dca1d5/tumblr_oh7kamMnaY1vfz7jgo1_1280.png"
              class="d-block w-100"
              alt="proper human"
            />
        </Carousel.Item>
        
        
        {/* <Carousel.Caption>
          <h1>crunchy nut</h1>
        </Carousel.Caption> */}
                <Carousel.Item>
            <img
              className="superhans"
            src="https://64.media.tumblr.com/6882c484aebf460f55e65b6573330596/tumblr_ok714j5i9a1vfz7jgo1_1280.png"
            class="d-block w-100"
              alt="crunchy nut"
            />
        </Carousel.Item>

      </Carousel>
      <Comments />
    </div>
  )
}

export default Mark;