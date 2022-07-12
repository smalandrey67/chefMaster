import { ComponentType, LazyExoticComponent, FC } from 'react'

import { NotFound } from '../pages/NotFound/NotFound'
import { Searched } from '../pages/Searched/Searched';

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
   { path: RoutePath.FAVORITES, component: Favorites },
   { path: RoutePath.NOTFOUND, component: NotFound }
]
