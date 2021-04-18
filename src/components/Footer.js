import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import { FaLinkedin } from 'react-icons/fa';
import ResearchGate from '../assets/img/footer1.png';
import CompaniesHouse from '../assets/img/footer2.png';
import KCLSU from '../assets/img/footer3.png';

export default function Footer() {

  return (
    <StaticQuery
    query={graphql`
      query FooterQuery {
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              title
              slug
              id
              heroImage {
                file {
                  url
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
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
                  <FaLinkedin />
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
              {data?.allContentfulBlogPost.edges.slice(0, 4).map((post) =>
                <li key={post.node.slug} className="footer__list-item">
                  <Link to={`/blog/${post.node.slug}`} key={post.node.id} className="footer__item-link">
                    {post.node.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </footer>
    )}
    />
  )
}

