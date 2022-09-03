import { lazy } from 'react';

export const BlogsCreate = lazy(() =>
   import(/* webpackChunkName: "BlogsCreate" */'./BlogsCreate').then(module => ({
      default: module.BlogsCreate
   }))
)