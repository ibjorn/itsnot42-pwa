import { extendTheme } from '@chakra-ui/react'
import components from './components'
import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './foundations'
import { layerStyles } from './layerStyles'
import { styles } from './styles'
import { textStyles } from './textStyles'

const theme = extendTheme({
  colors,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
  breakpoints,
  letterSpacings,
  sizes: {
    header: ['4.5rem', '6rem', '6rem'],
    content: '60rem',
  },
  textStyles: {
    ...textStyles,
  },
  layerStyles: {
    ...layerStyles,
  },
  styles,
  components,
})

export default theme
