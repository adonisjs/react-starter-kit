/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Infer } from '@vinejs/vine/types'

const placeholder: any = {}
export const registry = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    },
  },
  'newAccount.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/new_account_controller').default['create']>
    },
  },
  'newAccount.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as {
      body: Infer<(typeof import('#validators/user').signupValidator)>
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/new_account_controller').default['store']>
    },
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/session_controller').default['create']>
    },
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/session_controller').default['store']>
    },
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/session_controller').default['destroy']>
    },
  }
} as const satisfies Record<string, AdonisEndpoint>

declare module '@tuyau/core/types' {
  type Registry = typeof registry
  export interface UserRegistry extends Registry {}
}
