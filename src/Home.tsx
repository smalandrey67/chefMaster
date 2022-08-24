import { FC, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import 'react-toastify/dist/ReactToastify.css';

import { routes, RouteType } from 'routes/routes'

import { Preload } from 'components/reusable/Preload/Preload'
import { Header } from 'components/business/Header/Header'
import { Categories } from 'components/business/Categories/Categories'
import { ErrorFallback } from 'components/reusable/ErrorFallback/ErrorFallback'

import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from 'hooks/useRedux'
import { auth } from './firebase'
import { addUser } from 'store/slices/authSlice/authSlice'

export const Home: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                dispatch(addUser(currentUser))
            }
        })
        return unsubscribe
    }, [dispatch])


    return (
        <ErrorBoundary fallbackRender={() => <ErrorFallback height='100vh' />}>
            <Header />
            <Categories />

            <Suspense fallback={<Preload />}>
                <Routes>
                    {routes.map((route: RouteType) =>
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    )}
                </Routes>
            </Suspense>
        </ErrorBoundary >
    )
}