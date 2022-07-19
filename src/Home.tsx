import { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { routes, RouteType } from './routes/routes'

import { Preload } from './components/reusable/Preload/Preload'
import { Header } from './components/business/Header/Header'
import { Categories } from './components/business/Categories/Categories'
import { ErrorFallback } from './components/reusable/ErrorFallback/ErrorFallback'

export const Home: FC = () => {

    return (
        <ErrorBoundary fallbackRender={() => <ErrorFallback height='100vh' />}>
            <Header />
            <Categories />
            
            <Suspense fallback={<Preload />}>
                <Routes>
                    {routes.map((route: RouteType): JSX.Element =>
                        <Route key={route.path} path={route.path} element={<route.component />}/>
                    )}
                </Routes>
            </Suspense>
        </ErrorBoundary >
    )
}

