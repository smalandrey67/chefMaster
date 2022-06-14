import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { routes } from './routes'

import { Header } from './components/Header/Header'
import { Categories } from './components/Categories/Categories'
import { ErrorFallback } from './components/ErrorFallback/ErrorFallback'

export const Home: FC = () => {
    return (
        <ErrorBoundary fallbackRender={() => <ErrorFallback height='100vh' />}>
            <Header />
            <Categories /> 

            <Routes>
                {routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)}
            </Routes>
        </ErrorBoundary>
    )
}

