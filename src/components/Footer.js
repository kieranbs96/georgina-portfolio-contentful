import React from 'react'
import Link from 'gatsby-link'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin'

import ResearchGate from '../img/footer1.png'
import CompaniesHouse from '../img/footer2.png'
import KCLSU from '../img/footer3.png'

class Footer extends React.Component {
  render() {
    const data = this.props.data

    return (
      <footer className="footer">
        <div className="container h-padding h-center">
          <div className="footer__column">
            <h3>
              <Link to="/">Georgina Cross</Link>
            </h3>
            <div className="footer__social">
              <div className="footer__social-item">
                <a
                  href="//www.linkedin.com/in/georgina-cross-43aab790/"
                  className="footer__social-link"
                >
                  <FontAwesomeIcon icon={faLinkedIn} />
                </a>
              </div>
              <div className="footer__social-item">
                <a
                  href="//beta.companieshouse.gov.uk/officers/8w7y2O9Odr0Cig3HGtZvfjRmT7A/appointments"
                  className="footer__social-link"
                >
                  <img src={CompaniesHouse} alt="Companies House Logo" />
                </a>
              </div>
              <div className="footer__social-item">
                <a
                  href="//www.kclsu.org/representingyou/liberation/whmspotlight/georginacross/"
                  className="footer__social-link"
                >
                  <img src={KCLSU} alt="KCLSU Logo" />
                </a>
              </div>
              <div className="footer__social-item">
                <a
                  href="//www.researchgate.net/profile/Georgina_Cross3"
                  className="footer__social-link"
                >
                  <img src={ResearchGate} alt="ResearchGate Logo" />
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
              {data.slice(0, 4).map((i) => {
                <li key={i.node.slug} className="footer__list-item">
                  <Link to={`/blog/${i.node.slug}`} className="footer__item-link">
                    {i.node.title}
                  </Link>
                </li>
              })}
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
