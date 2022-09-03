import { lazy } from 'react'

export const Main = lazy(() =>
   import(/* webpackChunkName: "Main" */'./Main').then(module => ({
      default: module.Main
   }))
)