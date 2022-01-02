import { Box, Container } from '@chakra-ui/react'
import { Footer, Header } from 'gingerThemeComponents'
import React from 'react'
import CookieConsent from './cookie-notice/CookieConsent'
import { HelmetForFavicon } from './HelmetForFavicon'

const MaybeWithContainer = ({ useContainer, children }) => {
  return !useContainer ? (
    children
  ) : (
    <Container
      maxWidth="60rem"
      px="1rem"
      pb={['1.5rem', '2rem', '4.5rem']}
      pt="2rem"
    >
      {children}
    </Container>
  )
}

export const Layout = ({ useContainer = true, children }) => {
  return (
    <>
      <HelmetForFavicon />
      <Header />
      <Box marginLeft={{ md: (theme) => theme.sizes.header }}>
        <MaybeWithContainer useContainer={useContainer}>
          {children}
        </MaybeWithContainer>
      </Box>
      <CookieConsent />
      <Footer />
    </>
  )
}
