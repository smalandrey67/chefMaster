import { FC } from 'react'

import { InputEl, Label } from './InputContainer.styled'

import { InputContainerProps } from './InputContainer.types'

export const InputContainer: FC<InputContainerProps> = ({ 
   register, registerName, validationType, ...rest
}) => {
   return (
      <Label>
         <InputEl  
            {...register(registerName, validationType)}
            {...rest}
         />
      </Label>
   )
}