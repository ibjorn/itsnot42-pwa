import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { SeoSiteSettingsContext } from '@gatsbywpthemes/gatsby-plugin-wp-seo/src/context'
import parse from 'html-react-parser'
import { addPageNumber } from '@gatsbywpthemes/gatsby-plugin-wp-seo/src/helpers'

export const SeoTitleDescription = (props) => {
  const { title, seo, humanPageNumber, numberOfPages } = props
  const ctx = useContext(SeoSiteSettingsContext)

  let pageTitle = addPageNumber(
    seo?.page?.title || title || `${ctx.title} | ${ctx.description}`,
    humanPageNumber,
    numberOfPages
  )

  const pageDescription = seo?.page ? seo.page.metaDesc : ctx.description

  return (
    <Helmet
      htmlAttributes={{
        lang: ctx?.language.replace('_', '-') || 'en-US',
      }}
      title={parse(pageTitle)}
    >
      {pageDescription && <meta name="description" content={pageDescription} />}
    </Helmet>
  )
}
