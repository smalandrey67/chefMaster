import { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routes } from 'routes'

import { Preload } from 'components/common/Preload/Preload'
import { AuthCheckContainer } from 'components/containers/AuthCheckContainer/AuthCheckContainer'

export const AllRoutes: FC = () => {
  return (
    <Suspense fallback={<Preload />}>
      <Routes>
        {routes.map((route) => {
          if (route.isAuthRequired) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <AuthCheckContainer>
                    <route.component />
                  </AuthCheckContainer>
                }
              />
            )
          }
          return <Route key={route.path} path={route.path} element={<route.component />} />
        })}
      </Routes>
    </Suspense>
  )
}
