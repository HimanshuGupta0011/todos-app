import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-10" >
      <div className="container-fluid">
        <a className="navbar-brand text-info" href="#">Todos</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header