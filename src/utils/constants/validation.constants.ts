type validationLengthType = Readonly<{
   value: number;
   message: string;
}>

type validationFieldType = Readonly<{
   required: string;
   minLength?: validationLengthType;
   maxLength?: validationLengthType;
}>

type validationType = Readonly<{
   author: validationFieldType;
   title: validationFieldType;
   description: validationFieldType;
   file: validationFieldType;
   product: validationFieldType;
   question: validationFieldType;
}>

export const validation: validationType = {
   author: {
      required: 'Field is required',
      minLength: { value: 3, message: 'Min 3 symbols' },
      maxLength: { value: 30, message: 'Min 30 symbols' }
   },
   title: {
      required: 'Field is required',
      minLength: { value: 3, message: 'Min 3 symbols' },
      maxLength: { value: 30, message: 'Min 30 symbols' }
   },
   description: {
      required: 'Field is required',
      minLength: { value: 3, message: 'Min 3 symbols' },
      maxLength: { value: 1000, message: 'Max 1000 symbols' }
   },
   file: {
      required: 'Uploading file is required'
   },
   product: {
      required: 'Field is required'
   },
   question: {
      required: 'Field is required'
   }
}


