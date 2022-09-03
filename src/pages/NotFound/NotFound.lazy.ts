import { lazy } from 'react'

export const NotFound = lazy(() =>
   import(/* webpackChunkName: "NotFound" */'./NotFound').then(module => ({
      default: module.NotFound
   }))
)