import { lazy } from 'react'

export const Cuisines = lazy(() =>
  import(/* webpackChunkName: "Cuisines" */ './Cuisines').then((module) => ({
    default: module.Cuisines
  }))
)
