import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview-blog-page'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = 'Recent Blog Articles | Georgina Cross';
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div className="blog">
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <div className={styles.hero}>
            <h1>Blog</h1>
          </div>
          <h2 className="section-headline">Recent articles</h2>
          <div className="blog__article-list">
            {posts.map(({ node }) => {
              return (
                <div
                  className={`blog__article-preview ${(node.tags === null) ? `` : `blog__${node.tags}`}`}
                  key={node.slug}
                >
                  <ArticlePreview article={node} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
                allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
                  edges {
                    node {
                      title
                      slug
                      publishDate(formatString: "MMMM Do, YYYY")
  tags
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
