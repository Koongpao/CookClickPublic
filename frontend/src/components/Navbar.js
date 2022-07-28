const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Nav 1
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Nav 2</a>
            </li>
        </ul>
    </nav>
    
  )
}

export default Navbar