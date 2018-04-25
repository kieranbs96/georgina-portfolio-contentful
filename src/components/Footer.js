import React from 'react';
import Link from 'gatsby-link';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';

const Footer = () => (
  <footer className="footer">
    <div className="container h-padding h-center">
      <div className="footer__column">
        <h3>
          <Link to="/">Georgina Cross</Link>
        </h3>
        <div className="footer__social">
          <div className="footer__social-item">
            <a href="//www.linkedin.com/in/georgina-cross-43aab790/" className="footer__social-link">
              <FontAwesomeIcon icon={faLinkedIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__column">
        <h4>Pages</h4>
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link to="/" className="footer__item-link">
              Home
            </Link>
          </li>
          <li className="footer__list-item">
            <Link to="/portfolio" className="footer__item-link">
              Portfolio
            </Link>
          </li>
          <li className="footer__list-item">
            <Link to="/cpd" className="footer__item-link">
              CPD
            </Link>
          </li>
          <li className="footer__list-item">
            <Link to="/reflections" className="footer__item-link">
              Reflections
            </Link>
          </li>
          <li className="footer__list-item">
            <Link to="/blog" className="footer__item-link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Recent posts</h4>
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link to="/blog/should-we-depoliticise-the-nhs/" className="footer__item-link">
              Should we depoliticise the NHS?
            </Link>
          </li>
          <li className="footer__list-item">
            <Link to="/blog/amniotic-band-syndrome/" className="footer__item-link">
              Amniotic Band Syndrome
            </Link>
          </li>
          <li className="footer__list-item">
            <Link to="/blog/scarlet-fever-resurgence/" className="footer__item-link">
              Scarlet Fever Resurgence
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
