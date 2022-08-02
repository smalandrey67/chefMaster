import { ComponentType, LazyExoticComponent, FC } from 'react'

import { NotFound } from '../pages/NotFound/NotFound'
import { Searched } from '../pages/Searched/Searched'

// import { Main } from '../pages/Main/Main'
// import { Cuisines } from '../pages/Cuisines/Cuisines'
// import { Details } from '../pages/Details/Details'
// import { Blogs } from '../pages/Blogs/Blogs'
// import { BlogsCreate } from '../pages/BlogsCreate/BlogsCreate'
// import { Favorites } from '../pages/Favorites/Favorites'

import { Main } from './routesChunks'
import { Cuisines } from './routesChunks'
import { Details } from './routesChunks'
import { Blogs } from './routesChunks'
import { BlogsCreate } from './routesChunks'
import { Favorites } from './routesChunks'

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
   SEARCHED2 = '/searched/',
   FAVORITES = '/favorites',
   NOTFOUND = '*',
}

export const routes: RouteType[] = [
   { path: RoutePath.MAIN, component: Main },
   { path: RoutePath.CUISINE, component: Cuisines },
   { path: RoutePath.DETAILS, component: Details },
   { path: RoutePath.BLOGS, component: Blogs },
   { path: RoutePath.BLOGSCREATE, component: BlogsCreate },
   { path: RoutePath.SEARCHED, component: Searched },
   { path: RoutePath.SEARCHED2, component: Searched },
   { path: RoutePath.FAVORITES, component: Favorites },
   { path: RoutePath.NOTFOUND, component: NotFound }
]
