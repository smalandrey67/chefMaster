import { lazy } from 'react'

export const Blogs = lazy(() =>
  import(/* webpackChunkName: "Blogs" */ './Blogs').then((module) => ({
    default: module.Blogs
  }))
)
