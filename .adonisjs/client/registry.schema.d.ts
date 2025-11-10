/* eslint-disable prettier/prettier */
/// <reference path="../../adonisrc.ts" />

import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Infer } from '@vinejs/vine/types'

export interface Registry {
  'home': {
    methods: ["GET","HEAD"]
    pattern: '/'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'new_account.create': {
    methods: ["GET","HEAD"]
    pattern: '/signup'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/new_account_controller').default['create']>
    }
  }
  'new_account.store': {
    methods: ["POST"]
    pattern: '/signup'
    types: {
      body: Infer<(typeof import('#validators/user').signupValidator)>
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/new_account_controller').default['store']>
    }
  }
  'session.create': {
    methods: ["GET","HEAD"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/session_controller').default['create']>
    }
  }
  'session.store': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/session_controller').default['store']>
    }
  }
  'session.destroy': {
    methods: ["POST"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ReturnType<import('#controllers/session_controller').default['destroy']>
    }
  }
}

declare module '@tuyau/core/types' {
  export interface UserRegistry extends Registry {}
}
