import React from 'react'
import { CustomThemeWrapper, SidebarWrapper } from './src/components'

export const wrapPageElement = ({ element, props }) => (
  <CustomThemeWrapper>
    <SidebarWrapper {...props}>{element}</SidebarWrapper>
  </CustomThemeWrapper>
)

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const pluginOptions = {
    googleAdClientId: process.env.GATSBY_ADSENSE_ID, //TODO: Replace with your client-Id
    head: true, // Set to false if you prefer to have your adsense script loaded at the end of body instead of head.
  }

  if (process.env.NODE_ENV !== `production`) {
    return null
  }
  if (pluginOptions.googleAdClientId === undefined) {
    return null
  }
  const setComponents = pluginOptions.head
    ? setHeadComponents
    : setPostBodyComponents
  return setComponents([
    // <script
    //   async
    //   type="text/javascript"
    //   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    // />,
    // <script
    //   key={`google-adsense`}
    //   dangerouslySetInnerHTML={{
    //     __html: `
    //     (adsbygoogle = window.adsbygoogle || []).push({
    //         google_ad_client: "${pluginOptions.googleAdClientId}",
    //         enable_page_level_ads: true
    //     });
    //     `,
    //   }}
    // />,
    <script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pluginOptions.googleAdClientId}`}
      crossOrigin="anonymous"
      async
    />,
  ])
}
