import { lazy } from 'react'

export const Cooking = lazy(() =>
  import(/* webpackChunkName: "Cooking" */ './Cooking').then((module) => ({
    default: module.Cooking
  }))
)
