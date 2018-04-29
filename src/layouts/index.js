import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'

import './scss/main.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    console.log(posts)

    return (
      <div>
        <Helmet />
        <Header />
        <hr className="decoration" />
        <section className="content h-padding h-center">{children()}</section>
        <hr className="decoration bottom" />
        <Footer data={posts} />
        <Subfooter />
      </div>
    )
  }
}

export default Template

export const outerQuery = graphql`

  query OuterQuery {
    contentfulHome {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      mySkills
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
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
`
