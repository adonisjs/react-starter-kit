import { ReactNode } from 'react'
import Layout from '~/layouts/default'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) => {
    return resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
      (page: ReactNode) => <Layout children={page} />
    )
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress: {
    color: '#4B5563',
  },
})
