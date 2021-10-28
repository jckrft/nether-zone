import Mark from './mark edit II.png'
import Jez from './jez edit II.png'

import { ExternalLink } from 'react-external-link';

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
      
      <div className='home-footer'>
        <footer>
          <p className='copywrite'>© jckrft 2021</p>
          <p className='art-link'>Artwork by Ross Cooke courtesy of <ExternalLink href='https://dobby-club.com/'>Dobby Club</ExternalLink></p>
        </footer>
      </div>
      
    </div>

  )
}

export default Home;