import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import 'react-toastify/dist/ReactToastify.css'

import { Header } from 'components/business/Header/Header'
import { AllRoutes } from 'components/business/AllRoutes/AllRoutes'
import { Categories } from 'components/business/Categories/Categories'
import { ErrorFallback } from 'components/common/ErrorFallback/ErrorFallback.lazy'

import { useAuthStateChanged } from 'hooks/useAuthStateChanged'

export const Home: FC = () => {
  useAuthStateChanged()

  return (
    <ErrorBoundary fallbackRender={() => <ErrorFallback height='100vh' />}>
      <Header />
      <Categories />
      <AllRoutes />
    </ErrorBoundary>
  )
}
