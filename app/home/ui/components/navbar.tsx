import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { Leaf, LogOut, MenuIcon, Settings, X, User } from 'lucide-react'
import { NavUser, NavUserOptionsGroup } from '#common/ui/components/nav_user'
import useUser from '#auth/ui/hooks/use_user'
import useSettings from '#home/ui/hooks/use_settings'
import { motion } from 'framer-motion'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const user = useUser()
  const settings = useSettings()

  const navUser: NavUserOptionsGroup[] = [
    [
      {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
      },
    ],
    [
      {
        title: 'Log out',
        url: '/logout',
        icon: LogOut,
      },
    ],
  ]

  return (
    <div className="fixed bg-white border-b border-gray-300 p-3 text-foreground z-50 ">
      <div className={"flex justify-center w-screen"}>
        <div className="flex items-center w-3/4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`absolute top-0 left-0 w-full shadow-xl backdrop-blur-lg bg-background/80 z-40 flex flex-col items-center gap-4 py-16 transition-all duration-500 ${
            menuOpen ? 'opacity-100 pointer-events-auto flex' : 'opacity-0 pointer-events-none hidden'
          } md:hidden`}
        >
          <div className="flex flex-col w-full pt-8 gap-1 -mx-3">
            <Link
              className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-primary/20 bg-primary/30"
              href="/public#features"
            >
              🍃 Our solutions 🍃
            </Link>
            <Link
              className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-muted"
              href="/public#features"
            >
              Contact us
            </Link>

            <Link
              className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-muted"
              href="/public#features"
            >
              FAQ
            </Link>
            {user ? (
              <NavUser user={user} options={navUser} />
            ) : (
              <Link
                className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-muted"
                href="/login"
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
        <Link href="/public" className="flex w-2/4 justify-center items-center text-primary/80 relative z-50">
          <Leaf className="h-6 w-6 mr-2" />
          <span className="font-semibold">{settings.name}</span>
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8 w-1/3">
          <Link
            className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-muted"
            href="/public#features"
          >
            FAQ
          </Link>
          <Link
            className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-primary/20 bg-primary/30"
            href="/public#features"
          >
            🍃  Our solution 🍃
          </Link>
          <Link
            className="w-auto rounded-xl font-medium transition-all duration-300 md:font-semibold md:-mx-3 md:inline-flex md:items-center md:justify-center px-3 py-2 md:text-sm hover:bg-muted"
            href="/public#features"
          >
            Contact us
          </Link>
        </div>

        <div className="flex w-1/2 justify-end relative space-x-4 z-50">
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
          <button
            className="md:hidden justify-end w-full text-green-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.div
              animate={menuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 90 }
              }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? (
                <X className="text-2xl" />
              ) : (
                <MenuIcon className="text-2xl" />
              )}
            </motion.div>
          </button>
        </div>
      </div>
      </div>

    </div>
  )
}
