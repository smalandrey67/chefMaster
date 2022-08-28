import { FC } from 'react'

import { Flex, FlexGroup, Label, Input, Button } from 'assets/styled/Reused.styled'
import { SubMealMenuFieldProps } from './MealPlan.types'

export const SubMealMenuField: FC<SubMealMenuFieldProps> = ({ isSubMealMenu, inputSubMealAddRef, addSubMealMenuHandler }) => {

   return (
      <Flex style={{ display: isSubMealMenu ? 'flex' : 'none' }}>
         <FlexGroup margin='0 10px 0 0' height='35px' flex='0 1 70%'>
            <Label>
               <Input ref={inputSubMealAddRef} type='text' placeholder='...' name='sub meal' />
            </Label>
         </FlexGroup>

         <FlexGroup height='35px' flex='0 1 30%'>
            <Button onClick={addSubMealMenuHandler} type='button' name='add sub meal'>add</Button>
         </FlexGroup>
      </Flex>
   )
}