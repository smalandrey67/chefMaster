import { FirebaseUserNotFound, FirebaseWrongPassword, FirebaseEmailAlreadyInUse } from 'constants/authErrors'

export const handlerError = (error: unknown, customError: string): string => {
  if (error instanceof Error) {
    switch (error.message) {
      case FirebaseUserNotFound:
        return 'The User Not Found'
      case FirebaseWrongPassword:
        return 'The Password Is Not Correct'
      case FirebaseEmailAlreadyInUse:
        return 'The Email Already In Use'
      default:
        return 'Error'
    }
  }
  return customError
}
