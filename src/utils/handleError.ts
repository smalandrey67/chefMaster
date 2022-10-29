export const handlerError = (error: unknown, customError: string): string => {
  if (error instanceof Error) {
    return error.message
  }
  return customError
}
