import { FC } from 'react'
import { SpinnerTop, SpinnerMain, SpinnerFooter } from '../../styled/Basic/Spinner.styled'

export const Spinner: FC = () => {
  return (
    <SpinnerTop>
        <SpinnerMain>
            <SpinnerFooter></SpinnerFooter>
        </SpinnerMain>
    </SpinnerTop>
  )
}