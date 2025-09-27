import '@adonisjs/inertia/types'

import type React from 'react'

type ExtractProps<T> =
  T extends React.FC<infer Props> ? Props : T extends React.Component<infer Props> ? Props : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'errors/not_found': ExtractProps<
      (typeof import('../../inertia/pages/errors/not_found.tsx'))['default']
    >
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
  }
}
