import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  
  return (
    <div >
      <nav className="nav nav-tabs">
        <Link to='/' className='nav'>
          nether zone
        </Link>
        
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> 
  
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='active'>
            <Link to='/mark' className='nav-links' onClick={closeMobileMenu}>
              Mark
            </Link>
          </li>
          <li className='active'>
            <Link to='/jeremy' className='nav-links' onClick={closeMobileMenu}>
              Jeremy
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/superhans' className='nav-links' onClick={closeMobileMenu}>
              Super Hans
            </Link>
          </li>
        </ul>
      </nav>
      
      
      
      
      {/* <nav>
      <Link to='/'>
        nether zone
        </Link>
        
        
      <Link to='/mark' exact>
          Mark
        </Link>
        <Link to='/jeremy' exact>
          Jeremy
        </Link>
        <Link to='/superhans'>
          Super Hans
        </Link>
      </nav> */}
    
    </div>
  )
}

export default Navbar