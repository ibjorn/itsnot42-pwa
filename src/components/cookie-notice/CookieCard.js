import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { navigate } from 'gatsby'

const CookieCard = ({
  // header,
  message,
  onClick,
  button,
  privacyUrl,
  privacyText,
  // visible,
}) => {
  // const cardVisible = {
  //   display: visible ? 'block' : 'none',
  // }
  return (
    // <div className='cookieCard' style={cardVisible}>
    <Box
      as="div"
      p="1rem"
      position="fixed"
      bottom="1rem"
      right="1rem"
      sx={{
        maxWidth: '640px',
        backgroundColor: '#076666',
        color: '#fff',
        boxShadow:
          '0 10px 15px 5px rgba(0, 0, 0, 0.1), 0 4px 6px 5px rgba(0, 0, 0, 0.05)',
        opacity: 0.8,
        zIndex: 99,
        marginLeft: '1rem',
        fontSize: '0.875rem !important',
      }}
    >
      <Box as="div" p="1rem">
        {/* <h5>{header}</h5> */}
        <p style={{ fontSize: '0.875rem' }}>{message}</p>
        <Flex as="div" sx={{ justifyContent: 'flex-end' }}>
          <Button
            onClick={onClick}
            className="submit-button"
            sx={{
              py: 1,
              px: 2,
              fontSize: '0.875rem',
              color: '#fff',
              borderColor: '#fff',
            }}
          >
            {button}
          </Button>
          {privacyUrl && (
            <Button
              onClick={() => navigate(privacyUrl)}
              className="submit-button"
              sx={{
                py: 1,
                px: 2,
                ml: 2,
                fontSize: '0.875rem',
                color: '#fff',
                borderColor: '#fff',
              }}
            >
              {privacyText}
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  )
}

export default CookieCard
