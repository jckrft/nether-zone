import Carousel from 'react-bootstrap/Carousel'
import Comments from './Comments.js'
import Footer from './Footer.js';
// import './App.css'



function Jeremy({ data, toggleFetch, setToggleFetch }) {
  
  // const jeremyData = data.filter(quote => quote.fields.character === 'jeremy')

  
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
      
      {/* {jeremyData.map((jeremy) => (
        <div key={jeremy.id}>
          <h1>{jeremy.fields.series}</h1>
          <h1>{jeremy.fields.title}</h1>
          <div>
          <img src={jeremy.fields.quotes[0].url} 
          alt="jeremy"/>
          </div>
        </div>
      ))} */}
      <Comments
        setToggleFetch={setToggleFetch}
        toggleFetch={toggleFetch}
      />
          <div>
      <Footer/>
    </div>
  
    </div>
  )
}

export default Jeremy;

