import Mark from './mark edit II.png'
import Jez from './jez edit II.png'
import './Home.css'

function Home() {
  return (
    <div className='images'>
      <div className='jez'>
        <img src={Jez}
          alt="jeremy"
        />
      </div>
    <div className='mark'>
      <img src={Mark}
        alt="mark"
      />
      </div>
      </div>

  )
}

export default Home;