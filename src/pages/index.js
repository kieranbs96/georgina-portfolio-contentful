import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import ArticlePreview from '../components/ArticlePreview';
import HomeSidebar from '../components/HomeSidebar';

class RootIndex extends React.Component {
  render() {
    const siteTitle = 'About Me | Georgina Cross';
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const home = get(this, 'props.data.contentfulHome')

    return (

      <div className="home">
        <Helmet title={siteTitle} />
        <HomeSidebar data={home} />
        <div className="home__main-area">
          <h1>About Me</h1>
          <div dangerouslySetInnerHTML={{ __html: home.body.childMarkdownRemark.html }} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <div className="article-list">
              {posts?.slice(0, 6).map(({ node }) => {
                return <ArticlePreview article={node} />
              })}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default RootIndex;

export const pageQuery = graphql`

  query HomeQuery {
    contentfulHome {
      title
      mySkills
      body {
        childMarkdownRemark {
          html
        }
      }

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
