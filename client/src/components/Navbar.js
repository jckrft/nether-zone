import { Link } from 'react-router-dom'

function Navbar() {
  
  return (
    <div className="nav">
      <nav>
      <Link to='/mark' exact>
          Mark
        </Link>
        <Link to='/jeremy' exact>
          Jeremy
        </Link>
        <Link to='/superhans'>
          Super Hans
        </Link>
      </nav>
      
      <Link to='/'>
        nether zone
      </Link>
    </div>
  )
}

export default Navbar