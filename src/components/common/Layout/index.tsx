import React from 'react'
import { LayoutComponentStyle, ContentSection } from './index.style'
import { HeaderSection } from './Header'
import { SiderSection } from './Sider'

interface LayoutComponentProps {
  children: React.ReactNode
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
  children,
}) => {
  return (
    <LayoutComponentStyle>
      <HeaderSection />
      <SiderSection />
      <ContentSection>{children}</ContentSection>
    </LayoutComponentStyle>
  )
}

// eslint-disable-next-line react/display-name
export const WithLayout = (Component: React.FC<any>) => (props: any) => {
  return (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  )
}
