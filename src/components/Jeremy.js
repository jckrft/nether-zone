// import Carousel from 'react-bootstrap/Carousel'
import Comments from './Comments.js'



function Jeremy({ data, toggleFetch, setToggleFetch }) {
  
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
      
      </Carousel>*/}
      
      {jeremyData.map((jeremy) => (
        <div key={jeremy.id}>
          <h1>{jeremy.fields.series}</h1>
          <h1>{jeremy.fields.title}</h1>
          <div>
          <img src={jeremy.fields.quotes[0].url} 
          alt="jeremy"/>
          </div>
        </div>
      ))}
      <Comments
        setToggleFetch={setToggleFetch}
        toggleFetch={toggleFetch}
      />
    </div>
  )
}

export default Jeremy;

