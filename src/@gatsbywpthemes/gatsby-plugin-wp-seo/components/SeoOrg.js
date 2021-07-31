import React, { useContext } from 'react'
import { withPrefix } from 'gatsby'
import { Helmet } from 'react-helmet'
import slashes from 'remove-trailing-slash'
import { SeoSiteSettingsContext } from '@gatsbywpthemes/gatsby-plugin-wp-seo/src/context'
import parse from 'html-react-parser'
import {
  addPageNumber,
  absolutePath,
} from '@gatsbywpthemes/gatsby-plugin-wp-seo/src/helpers'

export const SeoOg = (props) => {
  const { seo, uri, humanPageNumber, numberOfPages, featuredImage } = props
  const { language, title, siteUrl } = useContext(SeoSiteSettingsContext)
  const isFrontPage = slashes(props.uri) === ''
  const ogType = isFrontPage ? 'website' : seo.page?.opengraphType
  const ogTitle = addPageNumber(
    parse(seo.page?.opengraphTitle) ||
      parse(seo.page?.title) ||
      (isFrontPage && parse(seo?.general?.openGraph?.frontPage?.title)),
    humanPageNumber,
    numberOfPages
  )
  const ogImage =
    seo.page?.opengraphImage?.localFile?.childImageSharp?.original ||
    featuredImage ||
    (isFrontPage &&
      seo?.general?.openGraph?.frontPage?.image?.localFile?.childImageSharp
        .original) ||
    seo?.general?.openGraph?.defaultImage?.localFile?.childImageSharp.original

  const ogDescription =
    seo.page?.opengraphDescription ||
    (isFrontPage && seo?.general?.openGraph?.frontPage?.description)

  return (
    <Helmet>
      <meta property="og:locale" content={language} />
      <meta property="og:site_name" content={parse(title)} />
      {ogType && <meta property="og:type" content={ogType} />}
      {uri && siteUrl && (
        <meta
          property="og:url"
          content={absolutePath(siteUrl, withPrefix(uri))}
        />
      )}
      {ogTitle && <meta property="og:title" content={parse(ogTitle)} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {siteUrl && ogImage?.src && (
        <meta
          property="og:image"
          content={absolutePath(siteUrl, ogImage.src)}
        />
      )}
      {ogImage?.width && (
        <meta property="og:image:width" content={ogImage.width} />
      )}
      {ogImage?.height && (
        <meta property="og:image:height" content={ogImage.height} />
      )}
    </Helmet>
  )
}
