const config = {
  webfontsOptions: {
    fonts: {
      google: [
        { family: 'Special Elite' },
        { family: 'Lexend', variants: ['400', '400i', '700', '700i'] },
      ],
    },
  },
  // wordPressUrl: process.env.GATSBY_WP_URL,
  // pathPrefix: '',
  // paginationPrefix: 'page',
  // addWordPressComments: true,
  // addWordPressSearch: false,
  // gaTrackingId: null,
  // gaOptions: {},
  googleTagManagerId: 'GTM-TXLCJPJ',
  googleTagManagerOptions: {
    includeInDevelopment: false,
    defaultDataLayer: { platform: 'gatsby' },
    dataLayerName: 'dataLayer',
    routeChangeEventName: 'route-change',
    enableWebVitalsTracking: true,
  },
  addSiteMap: true,
  siteMapOptions: {},
  // widgetAreas: {
  //   slideMenuWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  //   sidebarWidgets: ['Categories', 'RecentPosts', 'Tags', 'SocialFollow'],
  // },
  // archiveSidebarPosition: 'right',
  // pageCreateDebugOutput: false,
  logo: null,
  darkModeLogo: null,
  // socialFollowLinks: [],
  // overrideWPColors: false,
  // developLimit: null,
  // addColorModes: true,
  // webfontsOptions: {},
}
module.exports = config
