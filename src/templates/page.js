import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import Collapsible from 'react-collapsible';


const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'react-collapsible': Collapsible, 'react-link': Link },
}).Compiler;

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage');

    return (
      <div style={{ padding: '10px' }}>
        <Helmet title={`${page.title} | Georgina Cross`} />
        <div className="wrapper">

          <h1 className="section-headline">{page.title}</h1>
          <div>{renderAst(page.body.childMarkdownRemark.htmlAst)}</div>
        </div>
      </div>
    )
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`
