import Comments from './Comments.js'
import Footer from './Footer.js';
import Carousel from 'react-bootstrap/Carousel'


function Mark({ toggleFetch, setToggleFetch }) {
  
  return (
    <div>
      <Carousel className='carousel-all'>
      
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://64.media.tumblr.com/b51a287d2c65d8f160fd09d8f4dca1d5/tumblr_oh7kamMnaY1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
                <Carousel.Item>
            <img
              className="d-block w-100"
            src="https://64.media.tumblr.com/6882c484aebf460f55e65b6573330596/tumblr_ok714j5i9a1vfz7jgo1_1280.png"
              alt="crunchy nut"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://64.media.tumblr.com/b15b097359e5cbe469fa6d4b859e9477/tumblr_ofx1dovQaf1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/564x/8a/1e/08/8a1e08b10caf2cb560bde3f3842691ca.jpg"
              alt="proper human"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.kym-cdn.com/photos/images/facebook/001/125/932/c77.png"
              alt="proper human"
            />
        </Carousel.Item>

      </Carousel>

      <Comments
        setToggleFetch={setToggleFetch}
        toggleFetch={toggleFetch}
      />

      <Footer />
      
    </div>
  )
}

export default Mark;