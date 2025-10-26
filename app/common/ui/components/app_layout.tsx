import React from 'react'

import { NavUserOptionsGroup } from '#common/ui/components/nav_user'
import AppSidebarLayout from '#common/ui/components/app_sidebar_layout'
import AppHeaderLayout from '#common/ui/components/app_header_layout'
import { NavMainItem } from '#common/ui/types/nav_main'

import useUser from '#auth/ui/hooks/use_user'
import AbilityProvider from '#users/ui/context/abilities_context'

import { ThemeProvider } from '#ui/components/theme-provider'
import { Toaster } from '#ui/components/sonner'
import { LogOut, Settings, ServerCrash, CctvIcon, LayoutDashboard } from 'lucide-react'

interface BreadcrumbItemProps {
  label: string
  href?: string
}

interface AppLayoutProps extends React.PropsWithChildren {
  breadcrumbs?: BreadcrumbItemProps[]
  layout?: 'sidebar' | 'header'
}

const navMain: NavMainItem[] = [

  {
    title: 'Engagements Green IT',
    url: '/engagements',
  },
  {
    title: '🍃 Our solutions 🍃',
    items: [
      {
        title: 'Green server',
        url: '/settings',
        icon: ServerCrash,
      },
      {
        title: 'Green subscriptions',
        url: '/#features',
        icon: CctvIcon,
      },
    ]
  },
  {
    title: 'Contact Us',
    url: '/contact',
  },
]

const sideMain: NavMainItem[] = [
  {
    title: '🍃 Our solutions 🍃',
    items: [
      {
        title: 'Rapport',
        url: '/dashbozrd/rapport',
        icon: CctvIcon,
      },
    ]
  },
  {
    title: 'Contact Us',
    url: '/contact',
  },
]

export const navUser: NavUserOptionsGroup[] = [
  [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
  ],
  [
    {
      title: 'Logout',
      url: '/logout',
      icon: LogOut,
      variant: 'destructive',
    },
  ],
]

export default function AppLayout({
  children,
  breadcrumbs = [],
  layout = 'header',
}: AppLayoutProps) {
  const user = useUser()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AbilityProvider>
        <Toaster />

        {layout === 'header' ? (
          <AppHeaderLayout
            user={user}
            navMain={navMain}
            navUser={navUser}
            breadcrumbs={breadcrumbs}
          >
            {children}
          </AppHeaderLayout>
        ) : (
          <AppSidebarLayout
            user={user!}
            navMain={sideMain}
            navUser={navUser}
            breadcrumbs={breadcrumbs}
          >
            {children}
          </AppSidebarLayout>
        )}
      </AbilityProvider>
    </ThemeProvider>
  )
}
