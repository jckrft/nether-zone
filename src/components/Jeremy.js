import Carousel from 'react-bootstrap/Carousel'
import Comments from './Comments.js'
// import './App.css'



function Jeremy({ data, toggleFetch, setToggleFetch }) {
  
  // const jeremyData = data.filter(quote => quote.fields.character === 'jeremy')

  
  return (
    <div>
      <Carousel>
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
              src="https://64.media.tumblr.com/b15b097359e5cbe469fa6d4b859e9477/tumblr_ofx1dovQaf1vfz7jgo1_1280.png"
              alt="proper human"
            />
        </Carousel.Item>
                <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://pbs.twimg.com/media/EIJEdVkX4AELm7q?format=jpg&name=small"
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
                <Carousel.Item>
            <img
              className="proper d-block w-100"
              src="https://pbs.twimg.com/media/DIj2s3fXkAIlQg4?format=jpg&name=large"
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
    </div>
  )
}

export default Jeremy;

