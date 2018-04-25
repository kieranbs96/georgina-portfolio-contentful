import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ArticlePreview from '../components/article-preview'
import HomeSidebar from '../components/HomeSidebar';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div>
        <div className="home">
          <Helmet title={siteTitle} />
          <HomeSidebar />
          <div className="home__main-area">
            <h1>About Me</h1>
            <p>
              Hello, my name is Georgina and I am a third year nursing student. This e-Portfolio is designed to keep my
              reflective pieces together, track progress such as Continuing Professional Development (CPD) and to prepare me
              for the daunting NMC revalidation in three years' time.
        </p>
            <p>
              Spending time in hospital as a child myself I can empathize with those in my care with how scary being in
              unwell can be. Aspiring to be a children's nurse I aim to gain the skill set (My Skills can be found in the
              sidebar) to work with family units to get children back home if they can after illness'.
        </p>
            <p>
              I am due to graduate from King's College London in July 2018 and receive my NMC Pin shortly after, I have
              secured a role at Evelina London Children's Hospital and will be allocated my ward soon. My dissertation
              subject is 'Asthma and Obesity Meta-analysis' and once finished and graded I will post snippets on this
              website.
        </p>
            <p>
              Below is a gallery of pictures of me and pictures from my adventures to keep you entertained amongst enormous
              collection of work on this site.
        </p>
            <div className="wrapper">
              <h2 className="section-headline">Recent articles</h2>
              <ul className="article-list">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
