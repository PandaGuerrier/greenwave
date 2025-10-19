import React from 'react'

import { NavUser, NavUserOptionsGroup } from '#common/ui/components/nav_user'
import { AppLogo } from '#common/ui/components/app_logo'
import { NavHeaderMain } from '#common/ui/components/nav_header_main'
import { NavHeaderMobile } from '#common/ui/components/nav_header_mobile'
import { ToggleTheme } from '#common/ui/components/toggle_theme'
import { NavMainItem } from '#common/ui/types/nav_main'
import Breadcrumb from '#common/ui/components/breadcrumbs'

import UserDto from '#users/dtos/user'
import { Link } from '@inertiajs/react'
import { User } from 'lucide-react'

interface BreadcrumbItemProps {
  label: string
  href?: string
}

interface AppLayoutProps extends React.PropsWithChildren {
  breadcrumbs?: BreadcrumbItemProps[]
  navMain: NavMainItem[]
  navUser: NavUserOptionsGroup[]
  user?: UserDto | null
}

export default function AppHeaderLayout({
  children,
  breadcrumbs = [],
  navMain,
  navUser,
  user,
}: AppLayoutProps) {
  return (
    <>
      <div className="border-sidebar-border/80 border-b fixed w-screen z-50 bg-background">
        <div className="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
          <NavHeaderMobile items={navMain} />

          <AppLogo />

          <div className="px-6 hidden h-full w-full justify-center items-center space-x-6 lg:flex">
            <NavHeaderMain items={navMain} />
          </div>

          <div className="ml-auto flex items-center space-x-2">
            <div className="relative flex items-center space-x-2">
              <ToggleTheme />
              {user ? (
                <NavUser user={user} options={navUser} />
              ) : (
                <Link
                  className="rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-muted"
                  href="/login"
                >
                  <User />
                </Link>
              )}

            </div>
          </div>
        </div>
      </div>

      <div className="border-sidebar-border/70 flex w-full border-b">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>

      <main className="mx-auto px-2 flex h-full w-full max-w-screen flex-1 flex-col gap-4 rounded-xl">
        {children}
      </main>
    </>
  )
}
