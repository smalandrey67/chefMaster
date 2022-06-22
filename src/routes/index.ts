import { lazy, ComponentType, LazyExoticComponent, FC } from 'react'

import { Searched } from '../pages/Searched/Searched';
import { NotFound } from '../pages/NotFound/NotFound'

export type RouteType = {
   path: string;
   component: LazyExoticComponent<FC<string | unknown>> | ComponentType;
}

enum RoutePath {
   MAIN = '/',
   CUISINE = '/cuisine/:type',
   DETAILS = '/details/:id',
   BLOGS = '/blogs',
   BLOGSCREATE = '/blogs/create',
   SEARCHED = '/searched/:name',
   FAVORITES = '/favorites',
   NOTFOUND = '*',
}

const Main = lazy(() =>
   import(/* webpackChunkName: "Main" */'../pages/Main/Main').then(module => ({
      default: module.Main
   }))
)

const Cuisines = lazy(() =>
   import('../pages/Cuisines/Cuisines').then(module => ({
      default: module.Cuisines
   }))
)

const Details = lazy(() =>
   import(/* webpackChunkName: "Details" */'../pages/Details/Details').then(module => ({
      default: module.Details
   }))
)

const Blogs = lazy(() => 
   import(/* webpackChunkName: "Blogs" */'../pages/Blogs/Blogs').then(module => ({
      default: module.Blogs
   }))
)

const BlogsCreate = lazy(() => 
   import(/* webpackChunkName: "BlogsCreate" */'../pages/BlogsCreate/BlogsCreate').then(module => ({
      default: module.BlogsCreate
   }))
)

const Favorites = lazy(() => 
   import(/* webpackChunkName: "Favorites" */'../pages/Favorites/Favorites').then(module => ({
      default: module.Favorites
   }))
)

export const routes: RouteType[] = [
   { path: RoutePath.MAIN, component: Main },
   { path: RoutePath.CUISINE, component: Cuisines },
   { path: RoutePath.DETAILS, component: Details },
   { path: RoutePath.BLOGS, component: Blogs },
   { path: RoutePath.BLOGSCREATE, component: BlogsCreate },
   { path: RoutePath.SEARCHED, component: Searched },
   { path: RoutePath.FAVORITES, component: Favorites },
   { path: RoutePath.NOTFOUND, component: NotFound }
]
