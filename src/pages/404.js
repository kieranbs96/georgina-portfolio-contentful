import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview-blog-page'

class FourOhFour extends React.Component {
  render() {
    return (
      <div className="blog">
        <Helmet title="Four Oh Four - Page Not Found" />
        <div className="FourOhFour">
          <p className="404">
            Oh no! 😢 This page was not found.
            <br />
            <Link to="/">
              Here's a link to my homepage
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default FourOhFour;
