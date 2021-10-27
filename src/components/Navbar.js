import { Link } from 'react-router-dom'
import { useState } from 'react'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  
  return (
    <div className='navbar'>
      <nav className="navbar">
        <Link to='/' className='nav'>
          nether zone
        </Link>
        
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> 
  
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/mark' className='nav-links' onClick={closeMobileMenu}>
              Mark
            </Link>
          </li>
          <li className='nav-item'>
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
      
{/*       
      
      <Link to='/' className='home'>
        nether zone
        </Link>
      <nav>
      <Link to='/mark' exact className='nav-item'>
          Mark
        </Link>
        <Link to='/jeremy' exact className='nav-item'>
          Jeremy
        </Link>
        <Link to='/superhans' exact className='nav-item'>
          Super Hans
        </Link>
      </nav> */}
    
    </div>
  )
}

export default Navbar