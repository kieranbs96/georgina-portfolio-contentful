import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className="header">
    <div className="container h-padding h-center">
      <h2 className="header__heading">
        <Link to="/">Georgina Cross</Link>
      </h2>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/portfolio/">
              Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/reflections/">
              Reflections
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/cpd/">
              CPD
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/blog/">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
