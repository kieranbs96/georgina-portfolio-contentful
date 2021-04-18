import React from 'react'
import Link from 'gatsby-link'

export default function ArticlePreview({ article }) {
  return (
    <div>
      <img src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`} alt="" />
      <h3>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <Link to={`/blog/${article.slug}`} className="button secondary">
        See the full article
      </Link>
    </div>
  )
}