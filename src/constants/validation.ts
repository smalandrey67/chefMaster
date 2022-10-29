type ValidationPropertyType = Readonly<{
  value: number
  message: string
}>

type ValidationPatternType = Readonly<{
  value: RegExp
  message: string
}>

export type ValidationFieldType = Readonly<{
  required: string
  minLength?: ValidationPropertyType
  maxLength?: ValidationPropertyType
  pattern?: ValidationPatternType
}>

type ValidationType = Readonly<{
  title: ValidationFieldType
  description: ValidationFieldType
  file: ValidationFieldType
  product: ValidationFieldType
  question: ValidationFieldType
  email: ValidationFieldType
  password: ValidationFieldType
  subMeal: ValidationFieldType
}>

const patternForValidatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validation: ValidationType = {
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
  },
  email: {
    required: 'Email is required',
    minLength: { value: 3, message: 'Min 3 symbols' },
    maxLength: { value: 60, message: 'Max 20 symbols' },
    pattern: {
      value: patternForValidatEmail,
      message: 'Please enter a valid email'
    }
  },
  password: {
    required: 'Password is required',
    minLength: { value: 6, message: 'Min 6 symbols' },
    maxLength: { value: 20, message: 'Max 20 symbols' }
  },
  subMeal: {
    required: 'Field is required',
    minLength: { value: 5, message: 'Min 5 symbols' },
    maxLength: { value: 20, message: 'Max 20 symbols' }
  }
}
