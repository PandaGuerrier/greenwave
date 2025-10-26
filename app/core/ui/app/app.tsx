/// <reference path="../../../../adonisrc.ts" />
/// <reference path="../../../../config/inertia.ts" />

import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName =  'GreenWave'

createInertiaApp({
  progress: { color: 'black' },

  title: (title) => (title ? `${title} - ${appName}` : appName),

  resolve: (name) => {
    const firstPart = name.split('/')[0]
    const rest = name.split('/').slice(1).join('/')
    return resolvePageComponent(
      `/app/${firstPart}/ui/pages/${rest}.tsx`,
        // @ts-ignore
      import.meta.glob('/app/*/ui/pages/**/*.tsx')
    )
  },

  setup({ el, App, props }: { el: Element; App: React.ComponentType; props: Record<string, any> }) {
    hydrateRoot(el, <App {...props} />)
  },
})
