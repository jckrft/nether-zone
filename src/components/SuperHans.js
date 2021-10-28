import Comments from './Comments.js'
import Footer from './Footer.js';

import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css"

function SuperHans({ toggleFetch, setToggleFetch }) {
  
  

  return (
    <div>
      <Carousel className='carousel-all'>
      
      <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://memeguy.com/photos/images/wise-words-from-super-hans-as-always-259598.jpg"
              alt="proper human"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://i.pinimg.com/originals/d7/8c/3b/d78c3ba2eb8b37e65697c04666686b95.png"
              alt="proper human"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://64.media.tumblr.com/f63f706a8f2c84ee05fd39b1a529c80c/tumblr_og7avyoS7U1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://64.media.tumblr.com/05a032e8c41772ced95b8a382d89b21f/tumblr_ofy3biGrLA1vfz7jgo2_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://64.media.tumblr.com/8512df71c908c38e10fb4c0385e0da5c/tumblr_of1ts9UnaA1vfz7jgo1_1280.png"
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

export default SuperHans;