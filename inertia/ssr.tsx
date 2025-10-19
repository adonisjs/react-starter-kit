import { ReactNode } from 'react'
import Layout from '~/layouts/default'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      return resolvePageComponent(
        `./pages/${name}.tsx`,
        import.meta.glob('./pages/**/*.tsx', { eager: true }),
        (page: ReactNode) => <Layout children={page} />
      )
    },
    setup: ({ App, props }) => {
      return <App {...props} />
    },
  })
}
