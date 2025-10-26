import useSettings from '#home/ui/hooks/use_settings'
import { Github, Twitter, Linkedin, Mail, Leaf } from 'lucide-react'
import { Link } from '@inertiajs/react'

export default function FooterSection() {
  const year = new Date().getFullYear()
  const settings = useSettings()

  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#features' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer role="contentinfo" className="bg-background text-muted-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 min-w-0">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Leaf className={"text-primary"} />
              </span>
              <span className="text-lg font-semibold">{settings?.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Solutions simples et fiables pour vos projets. Support réactif, performance et sécurité au coeur de nos
              services.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:contact@pandaguerrier.fr"
                aria-label="send an e-mail"
                className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/10"
              >
                <Mail className="h-4 w-4" />
                <span>contact@pandaguerrier.fr</span>
              </a>
              <a
                href="/signup"
                className="ml-4 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:opacity-95"
                aria-label="S'inscrire"
              >
                Start
              </a>
            </div>
          </div>

          <nav className="flex-1 md:flex md:justify-center">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <a href="https://github.com/pandaguerrier/greenwave" aria-label="GitHub" className="rounded-md p-2 hover:bg-muted/10">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/pandaguerrier" aria-label="Twitter" className="rounded-md p-2 hover:bg-muted/10">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/jules-lofficial" aria-label="LinkedIn" className="rounded-md p-2 hover:bg-muted/10">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                <span className="block">&copy; {year} {settings?.name || 'Company'}. All right reserved.</span>
                <span className="block mt-2">
                  <Link href="/terms" className="hover:underline">Term of use</Link>
                  <span className="mx-2">·</span>
                  <Link href="/privacy" className="hover:underline">
                    Policy Privacy
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
