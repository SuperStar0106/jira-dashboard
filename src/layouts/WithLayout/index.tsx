import React, { type ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

interface WithLayoutProps {
  layout: React.ComponentType<LayoutProps>
}

const WithLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLayoutProps> => {
  const WithLayoutComponent: React.FC<P & WithLayoutProps> = ({
    layout: Layout,
    ...props
  }) => (
    <Layout>
      <WrappedComponent {...(props as P)} />
    </Layout>
  )

  return WithLayoutComponent
}

export default WithLayout
