import React from 'react'
import { CustomThemeWrapper, SidebarWrapper } from './src/components'

export const wrapPageElement = ({ element, props }) => (
  <CustomThemeWrapper>
    <SidebarWrapper {...props}>{element}</SidebarWrapper>
  </CustomThemeWrapper>
)
