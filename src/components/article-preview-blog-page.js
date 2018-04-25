import React from 'react'
import styles from './article-preview.module.css'
import Link from 'gatsby-link'

export default ({ article }) => (
  <div className="blog__preview-content">
    <div className="blog__preview-left">

      <h2 className="blog__article-title">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h2>
      <h3 className="blog__article-date tertiary">{article.publishDate}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      <Link to={`/blog/${article.slug}`} className="button secondary">
        See the full article
        </Link>
    </div>
    <div className="blog__preview-right">
      <picture>
        <img src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" className="blog__preview-image" />
        <span className="blog__preview-image-caption tertiary">

        </span>
      </picture>
    </div>
  </div>
)
