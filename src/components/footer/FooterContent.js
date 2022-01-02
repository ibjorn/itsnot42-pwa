import { Box } from '@chakra-ui/react'
import { useSiteSettings } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import React from 'react'

export const FooterContent = () => {
  const siteSettings = useSiteSettings()
  return (
    <Box
      sx={{
        a: {
          color: 'inherit',
          fontWeight: 'bold',
          textDecoration: 'none',
        },
        'a:hover': {
          opacity: 0.6,
          color: 'inherit',
        },
      }}
    >
      <div>
        <Link to="/about/" title="About It's Not 42">
          About
        </Link>{' '}
        |{' '}
        <Link to="/terms-of-use/" title="Terms of Use">
          Terms of Use
        </Link>{' '}
        |{' '}
        <Link to="/privacy-policy/" title="Privacy Policy">
          Privacy Policy
        </Link>{' '}
      </div>
      <div>
        {' '}
        {parse(siteSettings.title)} © {new Date().getFullYear()} - All Rights
        Reserved
      </div>
    </Box>
  )
}
