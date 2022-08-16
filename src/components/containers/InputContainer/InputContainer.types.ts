import { UseFormRegister } from 'react-hook-form'

import { SubmitBlogType } from 'types/Blogs'
import { ValidationFieldType } from 'utils/constants/validation.constants'

export type InputContainerProps = {
   register: UseFormRegister<any>;
   registerName: string;
   placeholder: string;
   type: string;
   autoComplete?: 'off' | 'on';
   accept?: string;
   validationType?: ValidationFieldType;
}