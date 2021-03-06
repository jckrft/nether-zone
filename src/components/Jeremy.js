import Carousel from 'react-bootstrap/Carousel'
import Comments from './Comments.js'
import Footer from './Footer.js';



function Jeremy({ toggleFetch, setToggleFetch }) {

  
  return (
    <div>
      <Carousel className='carousel-all'>
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src=" https://i.redd.it/eeqjbvq0ul941.jpg"
              alt="proper human"
            />
        </Carousel.Item>
                <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://64.media.tumblr.com/3b51ef35376839e714411d8604262360/tumblr_oggqf0YyMU1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
                <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://64.media.tumblr.com/cc54248bbc943cc82d3aae6ceeb1b09b/tumblr_ofx1b6lFZP1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
                
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://64.media.tumblr.com/cec52d83c8be9e368e56abd7fe1cc915/tumblr_ofiy2i9XVj1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
        
        <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://i.imgur.com/WZSFO7e.jpg"
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

export default Jeremy;

