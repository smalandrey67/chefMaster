import { lazy } from 'react'

export const Answer = lazy(() =>
  import(/* webpackChunkName: "Answer" */ './Answer').then((module) => ({
    default: module.Answer
  }))
)
