import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>

      <div className="nav-logo">TDM</div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>Technology</li>
        <li>Science</li>
        <li>Travel</li>
        <li>Entertainment</li>
        <li>About me</li>
        <li className='nav-contact'>Contact</li>
      </ul>
      
    </div>
  )
}

export default Navbar
