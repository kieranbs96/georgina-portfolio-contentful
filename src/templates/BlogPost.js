import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby';
import get from 'lodash/get';


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')

    return (
      <div style={{ background: 'white', padding: '2.5rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
        <Helmet title={`${post.title} | Georgina Cross`} />
        <div className="wrapper">
          <div className="blog__hero">
            <img
              src={`${post.heroImage.file.url}?w=1180&h=400&fit=fill`}
              alt=""
              className="blog__hero-image"
            />
          </div>
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
