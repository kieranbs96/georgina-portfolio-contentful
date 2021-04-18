import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get'
import { graphql } from 'gatsby';
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/scss/main.scss'

export default function Layout({location, children, data}) {
  const posts = get(this, 'props.data.allContentfulBlogPost.edges');
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <Header />
      <hr className="decoration" />
      <section className="content h-padding h-center">{children}</section>
      <hr className="decoration bottom" />
      <Footer data={posts} />
    </div>
  )
}


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
